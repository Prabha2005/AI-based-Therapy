export default function Stats() {
 const capabilities = [
  {
    icon: "🧠",
    title: "Natural Language Processing",
    description:
      "Processes user conversations to understand emotional context and generate meaningful responses."
  },
  {
    icon: "😊",
    title: "Mood Analysis",
    description:
      "Tracks emotional well-being through assessments and daily mood updates."
  },
  {
    icon: "🤖",
    title: "Conversational AI",
    description:
      "Provides supportive, context-aware conversations using AI-powered language understanding."
  },
  {
    icon: "🎯",
    title: "Personalized Recommendations",
    description:
      "Suggests breathing exercises, meditation, and wellness activities based on user interactions."
  }
];
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">
            Trusted AI Companion
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our platform combines artificial intelligence with mental wellness
            practices to provide secure, accessible, and personalized support.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {capabilities.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-3xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <h3 className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-5">
                {item.icon}
              </h3>

              <h4 className="mt-4 text-xl font-semibold">
                {item.title}
              </h4>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}