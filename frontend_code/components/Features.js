export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Therapy Chat",
      description:
        "Have supportive conversations with an AI assistant anytime you need emotional guidance."
    },
    {
      icon: "📊",
      title: "Mood Tracking",
      description:
        "Track your emotional well-being and identify mood patterns over time."
    },
    {
      icon: "📖",
      title: "Daily Journal",
      description:
        "Write private journal entries to reflect on your thoughts and personal growth."
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description:
        "Your conversations are protected with secure authentication and privacy-first design."
    },
    {
      icon: "⚡",
      title: "Instant AI Response",
      description:
        "Receive intelligent and compassionate responses in real time."
    },
    {
      icon: "❤️",
      title: "Personalized Support",
      description:
        "The AI adapts its responses to provide more meaningful emotional support."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Features
          </span>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Everything You Need for Mental Wellness
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Our AI Therapy Assistant combines intelligent conversations,
            emotional tracking, and secure journaling to help you build
            healthier mental habits.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}