import Link from "next/link";

export default function CProgramming() {
  const topics = [
    {
      title: "Introduction to C",
      description:
        "Learn the history, features, and applications of the C programming language.",
      link: "/courses/programming/c-programming/introduction",
    },
    {
      title: "Variables & Data Types",
      description:
        "Understand different data types, variable declaration, and memory storage.",
      link: "/courses/programming/c-programming/variables-data-types",
    },
    {
      title: "Operators",
      description:
        "Explore arithmetic, relational, logical, assignment, and bitwise operators.",
      link: "/courses/programming/c-programming/operators",
    },
    {
      title: "Input & Output",
      description:
        "Learn how to use printf() and scanf() for user interaction.",
      link: "/courses/programming/c-programming/input-output",
    },
    {
      title: "Conditional Statements",
      description:
        "Control program flow using if, if-else, nested if, and switch statements.",
      link: "/courses/programming/c-programming/conditional-statements",
    },
    {
      title: "Loops",
      description:
        "Master for, while, and do-while loops for repetitive tasks.",
      link: "/courses/programming/c-programming/loops",
    },
    {
      title: "Functions",
      description:
        "Create reusable code blocks and understand function parameters and return values.",
      link: "/courses/programming/c-programming/functions",
    },
    {
      title: "Arrays",
      description:
        "Store and manipulate multiple values efficiently using arrays.",
      link: "/courses/programming/c-programming/arrays",
    },
    {
      title: "Pointers",
      description:
        "Learn memory addresses, pointer operations, and dynamic memory concepts.",
      link: "/courses/programming/c-programming/pointers",
    },
    {
      title: "Structures",
      description:
        "Organize related data using structures and user-defined data types.",
      link: "/courses/programming/c-programming/structures",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            C Programming Language
          </h1>

          <p className="text-xl italic">
            Learn the foundation of programming and build strong coding skills.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Why Learn C Programming?
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          C programming is one of the most important and widely used programming
          languages in the world. It provides a strong foundation for learning
          advanced programming concepts and is commonly used in operating
          systems, embedded systems, compilers, databases, and software
          development. Understanding C helps students improve problem-solving
          skills, memory management knowledge, and logical thinking. Many modern
          programming languages such as C++, Java, and C# are influenced by C,
          making it an excellent starting point for every aspiring programmer.
        </p>
      </section>

      {/* Topics Section */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          C Programming Topics
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {topic.title}
              </h3>

              <p className="text-gray-600 mb-5">
                {topic.description}
              </p>

              <Link
                href={topic.link}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learn Topic
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}