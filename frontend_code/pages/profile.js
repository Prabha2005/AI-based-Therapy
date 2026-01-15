import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const SUGGESTIONS = {
  Low: {
    daily: "Spend a few minutes enjoying something you love.",
    weekly: "Maintain a healthy routine with rest and activity.",
    monthly: "Reflect on what keeps you feeling balanced.",
  },
  Moderate: {
    daily: "Try 5 minutes of slow breathing or quiet time.",
    weekly: "Go for walks or spend time with supportive people.",
    monthly: "Review what triggers stress and how you handle it.",
  },
  High: {
    daily: "Practice grounding exercises and gentle self-care.",
    weekly: "Talk openly with someone you trust.",
    monthly: "Consider seeking additional emotional support.",
  },
};

export default function Profile() {
  const router = useRouter();

  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");

    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) setProfile(JSON.parse(storedProfile));

    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setEmail(storedEmail);

    const storedName = localStorage.getItem("username");
    if (storedName) setUsername(storedName);
  }, []);

  if (!profile) {
    return (
      <Layout>
        <p className="text-center mt-10 text-gray-600">
          Please complete the assessment first.
        </p>
      </Layout>
    );
  }

  const advice = SUGGESTIONS[profile.stressLevel];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Header */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              Your Profile 💙
            </h2>
            <p className="text-gray-600 mt-1">
              A space made just for you
            </p>
          </div>

          {/* Account Details */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Account Details</h3>

            {editing ? (
              <div className="flex gap-2 mb-3">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border p-2 rounded flex-1"
                  placeholder="Enter your name"
                />
                <button
                  onClick={() => {
                    localStorage.setItem("username", username);
                    setEditing(false);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center mb-3">
                <p>
                  <strong>Name:</strong> {username || "Not set"}
                </p>
                <button
                  onClick={() => setEditing(true)}
                  className="text-blue-500 text-sm underline"
                >
                  Edit
                </button>
              </div>
            )}

            <p><strong>Email:</strong> {email || "User"}</p>
            <p><strong>Age Group:</strong> {profile.ageGroup}</p>
            <p><strong>Stress Level:</strong> {profile.stressLevel}</p>
          </div>

          {/* Personalized Advice */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">
              Your Personalized Well-Being Guide
            </h3>

            <AdviceCard title="🌱 Daily" text={advice.daily} />
            <AdviceCard title="📆 Weekly" text={advice.weekly} />
            <AdviceCard title="🗓 Monthly" text={advice.monthly} />

            <p className="text-xs text-gray-500 mt-4">
              These suggestions are for emotional support only.
            </p>
          </div>

          {/* Security */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Security</h3>

            <input
              type="password"
              placeholder="Current Password"
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full border p-2 rounded mb-3"
            />

            <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 mb-3">
              Update Password
            </button>

            <button
              onClick={() => {
                localStorage.clear();
                router.push("/login");
              }}
              className="w-full px-4 py-2 border rounded text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
}

function AdviceCard({ title, text }) {
  return (
    <div className="p-4 bg-blue-50 rounded mb-3">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
