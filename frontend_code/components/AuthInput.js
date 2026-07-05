import { useState } from "react";

export default function AuthInput({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full mb-5">

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <div className="relative">

        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-sm text-blue-600 hover:text-blue-800"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}

      </div>

    </div>
  );
}