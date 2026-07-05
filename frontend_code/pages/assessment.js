import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import questions from "../data/assessmentQuestions";

const options = [
  { label: "Never", value: 0 },
  { label: "Rarely", value: 1 },
  { label: "Sometimes", value: 2 },
  { label: "Often", value: 3 },
  { label: "Always", value: 4 },
];

export default function Assessment() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const selectOption = (value) => {
    const updated = [...answers];
    updated[currentQuestion] = value;
    setAnswers(updated);
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (answers[currentQuestion] === null) {
      alert("Please select an answer.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishAssessment();
    }
  };

  const finishAssessment = () => {
    const score = answers.reduce((sum, value) => sum + value, 0);

    let level = "";

    if (score <= 10) {
      level = "Excellent";
    } else if (score <= 20) {
      level = "Mild Stress";
    } else if (score <= 30) {
      level = "Moderate Stress";
    } else {
      level = "High Stress";
    }

   const newAssessment = {
  completed: true,
  score,
  level,
  date: new Date().toLocaleDateString(),
};

const history =
  JSON.parse(localStorage.getItem("assessmentHistory")) || [];

history.push(newAssessment);

localStorage.setItem(
  "assessmentHistory",
  JSON.stringify(history)
);

// Keep latest assessment separately
localStorage.setItem(
  "assessment",
  JSON.stringify(newAssessment)
);

    router.push("/dashboard");
  };

  

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

          <h1 className="text-3xl font-bold text-center text-blue-600">
            Mental Health Assessment
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Answer honestly to receive personalized support.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm text-gray-500 mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2 className="text-xl font-semibold mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.label}
                onClick={() => selectOption(option.value)}
                className={`w-full text-left border rounded-lg p-3 transition ${
                  answers[currentQuestion] === option.value
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-blue-50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="px-5 py-2 rounded bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={nextQuestion}
              className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              {currentQuestion === questions.length - 1
                ? "Finish Assessment"
                : "Next"}
            </button>
          </div>

        </div>

      </div>
    </Layout>
  );
}