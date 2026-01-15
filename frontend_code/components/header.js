import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="AI Therapy Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>

          {isLoggedIn && (
            <>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
          

              <Link href="/chatbot" className="hover:underline">
                Chatbot
              </Link>
              <Link href="/profile" className="hover:underline">
                Profile
              </Link>
            </>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          {!isLoggedIn ? (
            <>
              <Link href="/login">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>

      </div>
    </header>
  );
}

