import Link from "next/link";
import Layout from "../components/layout";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <Layout>
      <Banner />

      <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-16">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center">
          You’re Not Alone 💙
        </h1>

        <p className="text-lg text-gray-700 mt-4 max-w-xl text-center">
          AI Therapy Assistant is a safe space to share your thoughts, reflect on
          your emotions, and receive gentle, AI-powered support whenever you need it.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/login">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              🤖 AI Chat Support
            </h3>
            <p className="text-gray-600 text-sm">
              Talk freely with an AI assistant that listens and responds with empathy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              🧠 Mood Awareness
            </h3>
            <p className="text-gray-600 text-sm">
              Check in with your emotions and become more aware of how you feel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              🔒 Safe & Private
            </h3>
            <p className="text-gray-600 text-sm">
              Your conversations are private and focused on emotional well-being.
            </p>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-12 max-w-xl">
          ⚠️ This application provides emotional support only and is not a substitute
          for professional medical or mental health advice.
        </p>
      </div>
    </Layout>
  );
}

