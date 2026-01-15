import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const QUESTIONS = {
  "5-10": [
    "I feel sad sometimes",
    "I feel scared or worried",
    "I enjoy playing with others",
  ],
  "11-17": [
    "I feel stressed about studies",
    "I feel lonely or misunderstood",
    "I feel pressure from others",
  ],
  "18-40": [
    "I feel overwhelmed by responsibilities",
    "I feel anxious about the future",
    "I struggle to relax",
  ],
  "41+": [
    "I feel tired or low in energy",
    "I feel emotionally supported",
    "I feel worried often",
  ],
};

export default function About() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const handleAnswerChange = (q, value) => {
    setAnswers({ ...answers, [q]: Number(value) });
  };

  const evaluateStress = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);

    let level = "Low";
    if (total > 8 && total <= 13) level = "Moderate";
    if (total > 13) level = "High";

    setResult(level);

    localStorage.setItem(
      "profile",
      JSON.stringify({ ageGroup, gender, stressLevel: level })
    );

    setStep(4);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">

          {/* STEP 1: AGE */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Select Your Age Group</h2>
              <select
                className="w-full border p-2 rounded"
                onChange={(e) => setAgeGroup(e.target.value)}
              >
                <option value="">Choose</option>
                <option value="5-10">5 – 10</option>
                <option value="11-17">11 – 17</option>
                <option value="18-40">18 – 40</option>
                <option value="41+">41+</option>
              </select>

              <button
                disabled={!ageGroup}
                onClick={() => setStep(2)}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </>
          )}

          {/* STEP 2: GENDER */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Select Gender</h2>
              <select
                className="w-full border p-2 rounded"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Choose</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="NA">Prefer not to say</option>
              </select>

              <button
                disabled={!gender}
                onClick={() => setStep(3)}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Start Assessment
              </button>
            </>
          )}

          {/* STEP 3: QUESTIONS */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold mb-4">
                Emotional Self-Assessment
              </h2>

              {QUESTIONS[ageGroup].map((q, i) => (
                <div key={i} className="mb-4">
                  <label className="block font-medium mb-1">{q}</label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    onChange={(e) =>
                      handleAnswerChange(`q${i}`, e.target.value)
                    }
                    className="w-full"
                  />
                </div>
              ))}

              <button
                onClick={evaluateStress}
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded"
              >
                View Result
              </button>
            </>
          )}

          {/* STEP 4: RESULT */}
          {step === 4 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                Your Stress Level: {result}
              </h2>
              <p className="text-gray-600 mb-4">
                This assessment is for self-awareness only.
              </p>

              <button
                onClick={() => router.push("/profile")}
                className="px-6 py-2 bg-blue-500 text-white rounded"
              >
                Go to Profile
              </button>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}
