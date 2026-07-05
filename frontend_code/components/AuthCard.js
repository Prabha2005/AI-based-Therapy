export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

      <div className="text-center mb-8">

        <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-4">
          🧠
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="text-gray-600 mt-3">
          {subtitle}
        </p>

      </div>

      {children}

    </div>
  );
}