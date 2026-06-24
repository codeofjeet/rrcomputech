"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
  FaLaptopCode,
  FaDatabase,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function AboutUs() {

  const reviews = [
  {
    name: "Rahul Sharma",
    course: "Full Stack Development",
    review:
      "RR Computech helped me learn React, Node.js and MongoDB from scratch. The practical training was excellent.",
  },
  {
    name: "Priya Verma",
    course: "Python Programming",
    review:
      "The faculty is very supportive and explains concepts in a simple way. Highly recommended institute.",
  },
  {
    name: "Amit Singh",
    course: "Java Development",
    review:
      "Best computer institute in Jaipur. The projects and assignments improved my coding skills a lot.",
  },
  {
    name: "Neha Gupta",
    course: "RSCIT",
    review:
      "I cleared my RSCIT examination successfully because of the excellent guidance from RR Computech.",
  },
];

  return (
    <section className="bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            About <span className="text-cyan-400">RR Computech</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            RR Computech is a modern computer learning institute in Jaipur which dedicated to
            providing high-quality education in computer programming, full stack
            development, backend technologies, databases, Tally GST, RSCIT and BCA subjects.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Side Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-3xl"></div>

            <Image
              src="/rraboutUs.png"
              alt="About RR Computech"
              width={550}
              height={450}
              className="relative rounded-3xl shadow-2xl border border-cyan-500/20"
            />
          </div>

          {/* Right Side Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              15+ Years of Excellence in Computer Education
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              With more than 15 years of experience in the computer education
              field, we have trained thousands of students and helped them build
              successful careers in technology and software development.
            </p>

            <p className="text-gray-300 leading-8 mb-8">
              Our expert faculty team has 10 to 12 years of professional
              experience in their respective fields, ensuring practical,
              industry-oriented, and modern learning for every student.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-cyan-500/10 transition">
                <FaLaptopCode className="text-4xl text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  Programming Courses
                </h3>

                <p className="text-gray-300 text-sm leading-6">
                  Learn C, C++, Java, Python, JavaScript and modern web
                  technologies.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-cyan-500/10 transition">
                <FaDatabase className="text-4xl text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  Database Training
                </h3>

                <p className="text-gray-300 text-sm leading-6">
                  Master MySQL, MongoDB and advanced database management
                  concepts.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-cyan-500/10 transition">
                <FaUserGraduate className="text-4xl text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  BCA Subject Support
                </h3>

                <p className="text-gray-300 text-sm leading-6">
                  Complete guidance for BCA students with practical and theory
                  learning.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-cyan-500/10 transition">
                <FaChalkboardTeacher className="text-4xl text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  RS-CIT Courses
                </h3>

                <p className="text-gray-300 text-sm leading-6">
                  Learn RSCIT,RS-CFA with Taally, Digital Marketing, Graphic Design and Web Development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">15+</h2>
            <p className="text-gray-300">Years Experience</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">5000+</h2>
            <p className="text-gray-300">Students Trained</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">6+</h2>
            <p className="text-gray-300">Expert Teachers</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">100%</h2>
            <p className="text-gray-300">Practical Learning</p>
          </div>
        </div>
      </div>

      {/* Student Reviews Section */}
<div className="mt-24">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">
      What Our <span className="text-cyan-400">Students Say</span>
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto">
      Thousands of students have transformed their careers through our
      practical and industry-focused training programs.
    </p>
  </div>

  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    loop={true}
    spaceBetween={30}
    breakpoints={{
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
  >
    {reviews.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex mb-4">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                {star}
              </span>
            ))}
          </div>

          <p className="text-gray-300 leading-7 mb-6">
          {`"${item.review}"`}
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold">
              {item.name.charAt(0)}
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                {item.name}
              </h4>

              <p className="text-cyan-400 text-sm">
                {item.course}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </section>
  );
}