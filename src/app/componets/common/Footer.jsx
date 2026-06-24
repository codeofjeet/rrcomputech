import React from "react";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-3 mb-4 cursor-pointer">
            <Image
              src="/rrlogo.png"
              alt="Company Logo"
              width={50}
              height={50}
              priority
              className="w-auto h-auto"
            />

            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">
                RR Computech
              </h1>

              <p className="text-gray-400 text-sm">Institute</p>
            </div>
          </div>

          <p className="text-gray-400 leading-7">
            Learn Programming, Full Stack Development, Backend, Databases, Tally
            GST, RSCIT and BCA Subjects with Industry-Focused Practical
            Training.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-pink-400">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Courses
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-pink-400">Services</h2>

          <ul className="space-y-3 text-gray-300">
            <li>Web Development</li>
            <li>Frontend Design</li>
            <li>React Development</li>
            <li>Next.js Website</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-pink-400">
            Follow Me
          </h2>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>

          <p className="text-gray-400 mt-6 leading-7">
            Connect with me on social media and explore my latest projects.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-5 text-center text-gray-400 text-sm">
        © 2026 Jeetendra. All Rights Reserved.
      </div>
    </footer>
  );
}
