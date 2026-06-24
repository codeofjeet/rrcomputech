"use client";
import React from "react";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div>
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-pink-400 text-lg md:text-xl font-semibold tracking-widest uppercase mb-4">
            Welcome To RR Computech
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Build Your Future <br />
            With Modern Technology
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl leading-9 mb-8">
            “Success is not final, failure is not fatal: it is the courage to
            continue that counts.”
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg transition duration-300 shadow-xl hover:scale-105">
              <Link href={"/course"}> Get Started </Link>
            </button>

            <button className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-lg transition duration-300 shadow-xl hover:scale-105">
              <Link href={"/about-us"}>Explore More</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
