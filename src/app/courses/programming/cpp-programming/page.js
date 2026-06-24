import Image from "next/image";

export default function CPlusProgramming() {
  return (
    <main className="bg-slate-50 min-h-screen py-12">
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Content Section */}
            <div className="p-8 md:p-12">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-4">
                Programming Course
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Learn C++ Programming?
              </h1>

              <p className="text-gray-600 text-lg leading-8">
                C++ is one of the most powerful and widely used programming
                languages in the world. It is an extension of the C language
                and supports Object-Oriented Programming (OOP), making it
                suitable for developing complex software applications.
              </p>

              <p className="text-gray-600 text-lg leading-8 mt-5">
                C++ is commonly used in game development, system software,
                desktop applications, embedded systems, graphics programming,
                and competitive programming. Learning C++ helps students
                understand data structures, algorithms, memory management,
                and object-oriented concepts that are essential for modern
                software development.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
                 OOP
                </span>

                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Classes
                </span>

                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Inheritance
                </span>

                <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
                  Polymorephism
                </span>
              </div>
            </div>

            {/* Image Section */}
            <div className="p-6 flex items-center justify-center bg-slate-100">
              <Image
                src="/cPlusProgram.jpg"
                alt="C++ Programming Course"
                width={700}
                height={900}
                priority
                className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}