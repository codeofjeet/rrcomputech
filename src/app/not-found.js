"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="text-center z-10 max-w-2xl">
        
        {/* 404 */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white -mt-6">
          Page Not Found
        </h2>

        {/* Text */}
        <p className="text-gray-300 text-lg mt-6 leading-relaxed">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white transition duration-300 shadow-lg hover:scale-105"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </div>
  );
}