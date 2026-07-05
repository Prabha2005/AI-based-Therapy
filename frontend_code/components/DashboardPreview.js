export default function DashboardPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="text-blue-600 uppercase font-semibold tracking-widest">
              Dashboard
            </span>

            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              Monitor Your Mental Wellness
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Stay informed about your emotional well-being through mood
              analytics, AI insights, journaling history, and personalized
              recommendations.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  📈
                </div>

                <div>
                  <h4 className="font-semibold">
                    Mood Analytics
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Visualize emotional trends over time.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center">
                  🤖
                </div>

                <div>
                  <h4 className="font-semibold">
                    AI Suggestions
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Personalized wellness recommendations.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                  📖
                </div>

                <div>
                  <h4 className="font-semibold">
                    Journal History
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Review your daily reflections securely.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h3 className="text-xl font-bold">
                  Welcome Back 👋
                </h3>

                <p className="text-gray-500">
                  Your Wellness Dashboard
                </p>

              </div>

              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">
                😊
              </div>

            </div>

            {/* Cards */}

            <div className="grid grid-cols-3 gap-4 mb-8">

              <div className="bg-blue-50 rounded-2xl p-4 text-center">

                <h4 className="text-2xl">
                  😊
                </h4>

                <p className="text-sm mt-2">
                  Happy
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-4 text-center">

                <h4 className="text-2xl">
                  😌
                </h4>

                <p className="text-sm mt-2">
                  Calm
                </p>

              </div>

              <div className="bg-purple-50 rounded-2xl p-4 text-center">

                <h4 className="text-2xl">
                  😴
                </h4>

                <p className="text-sm mt-2">
                  Sleep
                </p>

              </div>

            </div>

            {/* Mood */}

            <div className="bg-gray-100 rounded-2xl p-6">

              <h4 className="font-semibold mb-4">
                Weekly Mood Progress
              </h4>

              <div className="flex items-end justify-between h-32">

                <div className="bg-blue-500 w-6 rounded-t-xl h-20"></div>
                <div className="bg-blue-500 w-6 rounded-t-xl h-28"></div>
                <div className="bg-blue-500 w-6 rounded-t-xl h-16"></div>
                <div className="bg-blue-500 w-6 rounded-t-xl h-24"></div>
                <div className="bg-blue-500 w-6 rounded-t-xl h-32"></div>
                <div className="bg-blue-500 w-6 rounded-t-xl h-24"></div>
                <div className="bg-blue-500 w-6 rounded-t-xl h-28"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}