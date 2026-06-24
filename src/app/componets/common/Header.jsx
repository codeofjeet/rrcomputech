"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/rrlogo.png"
            alt="Company Logo"
            width={50}
            height={50}
            priority
            style={{ width: "45px", height: "45px" }}
            className="rounded-full"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              RR Computech
            </h1>

            <p className="text-sm text-gray-300">Computer Learning Institute</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-white hover:text-pink-400 transition duration-300 font-medium"
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className="text-white hover:text-pink-400 transition duration-300 font-medium"
          >
            About
          </Link>

          <Link
            href="/gallery"
            className="text-white hover:text-pink-400 transition duration-300 font-medium"
          >
            Gallery
          </Link>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCourseOpen(true)}
            onMouseLeave={() => setCourseOpen(false)}
          >
            <button className="flex items-center gap-2 text-white hover:text-pink-400 transition duration-300 font-medium">
              Courses
              <FaChevronDown className="text-sm" />
            </button>

            {courseOpen && (
              <div className="absolute left-0 top-full pt-3 z-50">
                <div className="w-72 bg-white rounded-2xl shadow-2xl py-3 overflow-hidden">
                  <Link
                    href="/courses/programming"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
                  >
                    Programming
                  </Link>

                  <Link
                    href="/courses/web-development"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
                  >
                    Web Development
                  </Link>

                  <Link
                    href="/courses/mobile-app-development"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
                  >
                    Mobile App Development
                  </Link>

                  <Link
                    href="/courses/digital-marketing"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
                  >
                    Digital Marketing
                  </Link>

                  <Link
                    href="/courses/full-stack-development"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
                  >
                    Full Stack Development
                  </Link>

                  <Link
                    href="/courses/database"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
                  >
                    Database
                  </Link>

                  <Link
                    href="/courses/graphic-design"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
                  >
                    Graphic Design
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/projects"
            className="text-white hover:text-pink-400 transition duration-300 font-medium"
          >
            Projects
          </Link>

          <Link
            href="/contact-us"
            className="text-white hover:text-pink-400 transition duration-300 font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 py-5 space-y-4">
          <Link href="/" className="block text-white hover:text-pink-400">
            Home
          </Link>

          <Link
            href="/about-us"
            className="block text-white hover:text-pink-400"
          >
            About
          </Link>

          <Link
            href="/product-server"
            className="block text-white hover:text-pink-400"
          >
            Server
          </Link>

          {/* Mobile Courses Dropdown */}
          <div>
            <button
              onClick={() => setCourseOpen(!courseOpen)}
              className="flex items-center justify-between w-full text-white hover:text-pink-400"
            >
              Courses
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  courseOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {courseOpen && (
              <div className="ml-4 mt-3 space-y-3">
                <Link
                  href="/courses/programming"
                  className="block text-gray-300 hover:text-pink-400"
                >
                  Programming
                </Link>

                <Link
                  href="/courses/web-development"
                  className="block text-gray-300 hover:text-pink-400"
                >
                  Web Development
                </Link>

                <Link
                  href="/courses/mobile-app-development"
                  className="block text-gray-300 hover:text-pink-400"
                >
                  Mobile App Development
                </Link>

                <Link
                  href="/courses/digital-marketing"
                  className="block text-gray-300 hover:text-pink-400"
                >
                  Digital Marketing
                </Link>

                <Link
                  href="/courses/full-stack-development"
                  className="block text-gray-300 hover:text-pink-400"
                >
                  Full Stack Development
                </Link>

                <Link
                  href="/courses/database"
                  className="block text-gray-300 hover:text-pink-400"
                >
                  Database
                </Link>

                <Link
                  href="/courses/graphic-design"
                  className="block text-gray-300 hover:text-pink-400"
                >
                  Graphic Design
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/projects"
            className="block text-white hover:text-pink-400"
          >
            Projects
          </Link>

          <Link
            href="/contact-us"
            className="block text-white hover:text-pink-400"
          >
            Contact
          </Link>

          {/* Mobile Social Icons */}
          <div className="flex gap-4 pt-4 border-t border-slate-700">
            <a href="#" className="text-white text-xl hover:text-pink-400">
              <FaFacebookF />
            </a>

            <a href="#" className="text-white text-xl hover:text-pink-400">
              <FaInstagram />
            </a>

            <a href="#" className="text-white text-xl hover:text-pink-400">
              <FaTwitter />
            </a>

            <a href="#" className="text-white text-xl hover:text-pink-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
