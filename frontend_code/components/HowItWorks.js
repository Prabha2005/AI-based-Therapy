export default function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Sign up securely and create your personal AI Therapy account in just a few seconds."
    },
    {
      number: "02",
      title: "Start an AI Conversation",
      description:
        "Share your thoughts and emotions with your AI companion in a safe and supportive environment."
    },
    {
      number: "03",
      title: "Track Your Mood",
      description:
        "Monitor your emotional well-being with mood tracking and personal journal entries."
    },
    {
      number: "04",
      title: "Grow Every Day",
      description:
        "Review your progress, discover emotional patterns, and build healthier mental habits."
    }
  ];

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Process
          </span>

          <h2 className="text-4xl font-bold mt-3">
            How It Works
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Start your mental wellness journey in four simple steps.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative bg-gray-50 rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}