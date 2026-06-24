import React from 'react'
import CoursCard from '../componets/common/CoursCard'

export default function Course() {
     const courses = [
    {
      image: "/programming.jpg",
      title: "Programming",
      description:
        "General-purpose programming languages are versatile languages used to develop various types of applications across different domains.",
        link: "/courses/programming",
    },
    {
      image: "/webDevelopment.jpg",
      title: "Web Development",
      description:
        "Web development languages are used to build and maintain websites, including structure, design, and functionality.",
        link: "/courses/web-development",
    },
    {
      image: "/frontendFrameworks.jpg",
      title: "Frontend Frameworks",
      description:
        "Frontend frameworks are tools used to build user interfaces, making web development faster and more efficient.",
        link: "/courses/programming",
    },
    {
      image: "/mobileApp.jpg",
      title: "Mobile App Development",
      description:
        "Mobile app development involves creating applications for smartphones using platforms like Android Studio and Xcode.",
        link: "/courses/programming",
    },
    {
      image: "/backendDevelopment.jpg",
      title: "Backend Development",
      description:
        "Backend development involves building server-side logic, databases, and APIs to handle application data and functionality.",
        link: "/courses/programming",
    },
    {
      image: "/dataBase.jpg",
      title: "Database Languages",
      description:
        "Database languages are used to store, manage, and retrieve data in database systems efficiently.",
        link: "/courses/programming",
    },
    {
      image: "/digitalmarketing.jpg",
      title: "Digital Marketing",
      description:
        "Digital marketing techniques are used to promote products and services through online platforms and digital technologies.",
        link: "/courses/programming",
    },
    {
      image: "/dataAnalytic.jpg",
      title: "Data Analytic",
      description:
        "Data analytics techniques are used to collect, process, and analyze data to discover useful information and support decision-making.",
        link: "/courses/programming",
    },
  ];
  return (
     <section className="bg-lime-50 py-10">
          <h2 className="text-3xl font-bold text-center">Main Courses</h2>
    
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {courses.map((course, index) => (
              <CoursCard
                key={index}
                image={course.image}
                title={course.title}
                description={course.description}
                link={course.link}
              />
            ))}
          </div>
        </section>
  )
}
