import Link from "next/link";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">

        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              About AI Therapy Assistant
            </h1>

            <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto">
              Everyone experiences stress, worries, and emotional ups and
              downs. AI Therapy Assistant provides a safe space where you can
              better understand your emotions, reflect on your thoughts, and
              receive supportive guidance whenever you need it.
            </p>

            <Link href="/assessment">
              <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Start Your Assessment
              </button>
            </Link>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-center mb-12">
            What You Can Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                🧠 Mental Health Assessment
              </h3>

              <p className="text-gray-600 leading-7">
                Complete a short assessment to understand your emotional
                well-being. It helps you recognize how you're feeling and
                provides supportive recommendations based on your responses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                🤖 AI Therapy Chat
              </h3>

              <p className="text-gray-600 leading-7">
                Talk freely with your AI companion in a private and supportive
                environment. The chatbot listens, understands your emotions,
                and encourages healthy conversations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                📝 Reflection Journal
              </h3>

              <p className="text-gray-600 leading-7">
                Write about your thoughts, emotions, and daily experiences.
                Looking back at your reflections can help you notice positive
                changes and personal growth over time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                😊 Daily Mood Check-In
              </h3>

              <p className="text-gray-600 leading-7">
                Record how you're feeling each day. Small daily check-ins can
                help you become more aware of your emotions and build healthy
                self-care habits.
              </p>
            </div>

          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-16">

          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>

            <div className="grid md:grid-cols-5 gap-6 text-center">

              <div>
                <div className="text-4xl mb-3">👤</div>
                <h3 className="font-semibold">Create an Account</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Register and securely access your personal dashboard.
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="font-semibold">Take Assessment</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Complete a short emotional wellness assessment.
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-semibold">Chat with AI</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Share your thoughts and receive supportive responses.
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">📝</div>
                <h3 className="font-semibold">Reflect</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Save your reflections and build a personal journal.
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-semibold">Track Progress</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Monitor your emotional journey and continue building healthy habits.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Why Choose */}
        <section className="max-w-5xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose AI Therapy Assistant?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-blue-50 p-5 rounded-lg">
              ✅ Available whenever you need support
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              ✅ Private and secure conversations
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              ✅ Encourages healthy self-reflection
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              ✅ Simple and easy to use
            </div>

          </div>

        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-50 py-14">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-2xl font-bold mb-4">
              Important Information
            </h2>

            <p className="text-gray-700 leading-8">
              AI Therapy Assistant is designed to provide emotional support,
              self-reflection, and wellness guidance. It is <strong>not</strong> a
              replacement for professional medical advice, diagnosis, or mental
              health treatment. If you are experiencing severe emotional distress
              or are in crisis, please contact a qualified mental health
              professional or your local emergency services immediately.
            </p>

          </div>

        </section>

        {/* CTA */}
        <section className="py-16 text-center">

          <h2 className="text-3xl font-bold">
            Ready to Begin Your Wellness Journey?
          </h2>

          <p className="mt-4 text-gray-600">
            Take your first step towards understanding your emotional well-being.
          </p>

          <Link href="/assessment">
            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Start Assessment
            </button>
          </Link>

        </section>

      </div>
    </Layout>
  );
}