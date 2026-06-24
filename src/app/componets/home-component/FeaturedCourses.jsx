import React from "react";
import CoursCard from "../common/CoursCard";

export default function FeaturedCourses() {
  // const courses = [
  //   {
  //     image: "/programming.jpg",
  //     title: "Programming",
  //     description:
  //       "General-purpose programming languages are versatile languages used to develop various types of applications across different domains.",
  //     link: "/courses/programming",
  //   },
  //   {
  //     image: "/webDevelopment.jpg",
  //     title: "Web Development",
  //     description:
  //       "Web development languages are used to build and maintain websites, including structure, design, and functionality.",
  //     link: "/courses/web-development",
  //   },
  //   {
  //     image: "/mobileApp.jpg",
  //     title: "Mobile App Development",
  //     description:
  //       "Mobile app development involves creating applications for smartphones using platforms like Android Studio and Xcode.",
  //     link: "/courses/programming",
  //   },
  //   {
  //     image: "/digitalmarketing.jpg",
  //     title: "Digital Marketing",
  //     description:
  //       "Digital marketing techniques are used to promote products and services through online platforms and digital technologies.",
  //     link: "/courses/programming",
  //   },
  // ];

  const courses = [
    {
      image: "/programming.jpg",
      title: "Programming",
      slug: "programming",
      description:
        "General-purpose programming languages are versatile languages used to develop various types of applications.",
    },
    {
      image: "/webDevelopment.jpg",
      title: "Web Development",
      slug: "web-development",
      description:
        "Web development languages are used to build and maintain websites.",
    },
    {
      image: "/mobileApp.jpg",
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description:
        "Mobile app development involves creating applications for smartphones.",
    },
    {
      image: "/digitalmarketing.jpg",
      title: "Digital Marketing",
      slug: "digital-marketing",
      description:
        "Digital marketing techniques are used to promote products online.",
    },
  ];

  return (
    <section className="bg-lime-50 py-10">
      <h2 className="text-3xl font-bold text-center">Featured Courses</h2>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {courses.map((course, index) => (
          // <CoursCard
          //   key={index}
          //   image={course.image}
          //   title={course.title}
          //   description={course.description}
          //   link={course.link}
          // />

          <CoursCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            link={`/courses/${course.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
