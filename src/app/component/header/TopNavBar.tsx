"use client";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function TopNavBar() {
  const { darkMode } = useContext(ThemeContext); 

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 shadow-md ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link
              href="/"
              className={`text-xl font-bold ${
                darkMode ? "text-red-400" : "text-red-500"
              }`}
            >
              Alpinist
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/pages/login"
              className={`hover:text-blue-400 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Login
            </Link>
            <Link
              href="/pages/register"
              className={`hover:text-blue-400 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Create account
            </Link>

            
          </div>
        </div>
      </div>
    </nav>
  );
}
