import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { loginUser } from "../utils/api";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    const response = await loginUser(email, password);
    setLoading(false);

    if (response.success) {
      router.push("/dashboard");
    } else {
      setError(response.message);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-2xl font-bold">Login</h2>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-3 p-2 border rounded w-64"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-3 p-2 border rounded w-64"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </Layout>
  );
}
