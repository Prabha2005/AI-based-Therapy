export default function AIWorkflow() {
  const steps = [
    {
      title: "User Input",
      icon: "💬",
      desc: "The user shares thoughts, emotions, or concerns through the chat interface."
    },
    {
      title: "Natural Language Processing",
      icon: "🧠",
      desc: "The backend processes the text using NLP techniques to understand context and emotional tone."
    },
    {
      title: "AI Response Generation",
      icon: "🤖",
      desc: "The AI model generates supportive, context-aware responses using transformer-based language models."
    },
    {
      title: "Mood & Session Analytics",
      icon: "📊",
      desc: "Conversations are analyzed to provide mood trends, emotional insights, and personalized recommendations."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            AI Architecture
          </span>

          <h2 className="text-4xl font-bold mt-3">
            How the AI Works
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            The platform combines Natural Language Processing, conversational AI,
            and backend intelligence to provide personalized emotional support.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-cyan-400 transition"
            >

              <div className="text-5xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold">
                {step.title}
              </h3>

              <p className="text-slate-300 mt-4 leading-7">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}