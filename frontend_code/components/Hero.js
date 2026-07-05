import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              🤖 AI Powered Mental Wellness
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Your Personal
              <br />
              <span className="text-cyan-300">
                AI Therapy Assistant
              </span>
            </h1>

            <p className="mt-8 text-lg text-blue-100 leading-8 max-w-xl">
              Experience a safe, intelligent, and supportive space to
              express your emotions, monitor your mood, and receive
              AI-powered guidance whenever you need it.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/register"
                className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition duration-300"
              >
                Get Started
              </Link>

              <Link
                href="/login"
                className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition duration-300"
              >
                Login
              </Link>

            </div>

            {/* Quick Highlights */}

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>
                <h3 className="text-3xl font-bold">
                  24/7
                </h3>
                <p className="text-blue-200 text-sm">
                  AI Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  100%
                </h3>
                <p className="text-blue-200 text-sm">
                  Private
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  Secure
                </h3>
                <p className="text-blue-200 text-sm">
                  Authentication
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            <img
              src="/banner.jpeg"
              alt="AI Therapy"
              className="w-full max-w-lg rounded-3xl shadow-2xl border-4 border-white/20"
            />

            {/* Floating Card 1 */}

            <div className="absolute -left-8 top-12 bg-white text-gray-800 rounded-2xl shadow-xl p-4 hidden lg:block">

              <p className="text-2xl">😊</p>

              <h4 className="font-semibold">
                Mood Tracking
              </h4>

              <p className="text-sm text-gray-500">
                Daily emotional insights
              </p>

            </div>

            {/* Floating Card 2 */}

            <div className="absolute -right-8 bottom-12 bg-white text-gray-800 rounded-2xl shadow-xl p-4 hidden lg:block">

              <p className="text-2xl">🤖</p>

              <h4 className="font-semibold">
                AI Chat
              </h4>

              <p className="text-sm text-gray-500">
                Instant guidance
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}