import React from 'react'
import CoursCard from '@/app/componets/common/CoursCard';

export default function Programming() {
 const courses = [
     {
       image: "/cProg.jpg",
       title: "C Programming",
       description:
         "C programming is a powerful, fast, and structured language widely used for software, system, and application development.",
         link: "/courses/programming/c-programming",
     },
     {
       image: "/cPlus.jpg",
       title: "C++ Programming",
       description:
         "C++ is a powerful object-oriented programming language used for software development, games, applications, and system programming.",
          link: "#",
     },
     {
       image: "/cSharp.jpg",
       title: "C# Programming",
       description:
         "C# is a modern object-oriented programming language developed by Microsoft for desktop, web, and game development.",
          link: "#",
     },
     {
       image: "/javaProg.jpg",
       title: "Java Programming",
       description:
         "Java is a secure, platform-independent programming language widely used for web, mobile, desktop, and enterprise applications.",
          link: "#",
     },
     {
       image: "/pythonProg.jpg",
       title: "Python Programming",
       description:
         "Python is a simple, powerful, and versatile programming language used for web development, AI, automation, and data science.",
          link: "#",
     },
     {
       image: "/jsProg.jpg",
       title: "Java Script Programming",
       description:
         "JavaScript is a popular scripting language used to create interactive, dynamic, and responsive websites and web applications.",
          link: "#",
     },
    
   ];
 
   return (
     <section className="bg-lime-50 py-10">
       <h2 className="text-3xl font-bold text-center">General Purpose programming</h2>
 
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
   );
}
