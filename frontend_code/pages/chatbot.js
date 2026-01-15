import { useState } from "react";
import Layout from "../components/layout";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Show user message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
  message: userMessage.text,
  history: messages,
}),

        
      });

      const data = await response.json();

      const botMessage = {
        sender: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I’m having trouble responding right now.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto mt-10 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold text-center mb-1">
          AI Therapy Assistant
        </h2>

        <p className="text-xs text-gray-500 text-center mb-4">
          ⚠️ This assistant provides emotional support only and is not a substitute
          for professional medical advice.
        </p>

        <div className="h-64 overflow-y-auto border p-2 mb-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span className="inline-block px-3 py-2 rounded bg-gray-200">
                {msg.text}
              </span>
            </div>
          ))}

          {loading && (
            <p className="text-sm text-gray-400">AI is typing...</p>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="How are you feeling today?"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 rounded"
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
}
