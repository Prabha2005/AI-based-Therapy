import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  const [selectedMood, setSelectedMood] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [reflectionText, setReflectionText] = useState("");
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }

    const saved = JSON.parse(localStorage.getItem("reflections")) || [];
    setReflections(saved);
  }, []);

  const moodData = {
    good: {
      label: "😊 Good",
      message: "That’s wonderful to hear! 🌟",
      advice: "Try capturing what’s going well today so you can revisit it later."
    },
    okay: {
      label: "😐 Okay",
      message: "It’s okay to feel neutral.",
      advice: "A short reflection or calm breathing could help bring clarity."
    },
    low: {
      label: "😔 Low",
      message: "I’m really glad you checked in.",
      advice: "You’re not alone. Writing your thoughts or chatting may ease the weight."
    },
    anxious: {
      label: "😟 Anxious",
      message: "That sounds overwhelming.",
      advice: "Let’s slow things down together. A grounding exercise might help."
    }
  };

  const reflectionPrompts = [
    "What’s one thought that keeps returning today?",
    "What’s something you handled better than you expected?",
    "What’s one thing you wish others understood about you?"
  ];

  const handleReflect = () => {
    const random =
      reflectionPrompts[Math.floor(Math.random() * reflectionPrompts.length)];
    setPrompt(random);
  };

  const saveReflection = () => {
    if (!reflectionText.trim()) return;

    const newReflection = {
      id: Date.now(),
      text: reflectionText,
      createdAt: new Date().toLocaleString()
    };

    const updated = [newReflection, ...reflections];
    setReflections(updated);
    localStorage.setItem("reflections", JSON.stringify(updated));
    setReflectionText("");
  };

  const deleteReflection = (id) => {
    const updated = reflections.filter(r => r.id !== id);
    setReflections(updated);
    localStorage.setItem("reflections", JSON.stringify(updated));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">

        {/* Welcome */}
        <div className="bg-white rounded-lg shadow p-6 mb-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">Welcome Back 👋</h2>
          <p className="text-gray-600 mt-2">
            This is your personal space to reflect, relax, and talk freely.
          </p>
        </div>

        {/* Mood Check-in */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">
            How are you feeling today?
          </h3>

          <div className="flex flex-wrap gap-4">
            {Object.entries(moodData).map(([key, mood]) => (
              <button
                key={key}
                onClick={() => setSelectedMood(mood)}
                className="px-4 py-2 rounded bg-gray-100 hover:bg-blue-100"
              >
                {mood.label}
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-blue-700">
                {selectedMood.message}
              </p>
              <p className="text-gray-600 mt-1">
                {selectedMood.advice}
              </p>

              {selectedMood.label.includes("Low") && (
                <Link href="/chatbot">
                  <p className="text-sm text-blue-600 mt-2 underline cursor-pointer">
                    Would you like to talk it out?
                  </p>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Chatbot */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              AI Therapy Chatbot
            </h3>
            <p className="text-gray-600 mb-4">
              Talk freely with your AI companion.
            </p>
            <Link href="/chatbot">
              <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Start Chat
              </button>
            </Link>
          </div>

          {/* Reflection */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">
              Reflection Journey
            </h3>

            <button
              onClick={handleReflect}
              className="mb-3 px-4 py-2 bg-green-500 text-white rounded"
            >
              Get a Prompt
            </button>

            {prompt && (
              <p className="text-gray-700 mb-2 font-medium">{prompt}</p>
            )}

            <textarea
              value={reflectionText}
              onChange={(e) => setReflectionText(e.target.value)}
              className="w-full p-3 border rounded-lg"
              rows="4"
              placeholder="Write freely. This is your safe space."
            />

            <button
              onClick={saveReflection}
              className="mt-3 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save Reflection
            </button>
          </div>
        </div>

        {/* Reflection Timeline */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">
            My Reflection Journey
          </h3>

          {reflections.length === 0 && (
            <p className="text-gray-500">
              No reflections yet. Your journey starts when you write.
            </p>
          )}

          {reflections.map(r => (
            <div key={r.id} className="bg-white shadow rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-400">{r.createdAt}</p>
              <p className="text-gray-700 mt-2">{r.text}</p>
              <button
                onClick={() => deleteReflection(r.id)}
                className="text-red-500 text-sm mt-2 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-8">
          ⚠️ This application provides emotional support only.
        </p>
      </div>
    </Layout>
  );
}
