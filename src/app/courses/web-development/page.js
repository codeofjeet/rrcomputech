import React from 'react'
import CoursCard from '@/app/componets/common/CoursCard';

export default function Webdevelopment() {
 const courses = [
     {
       image: "/html.jpg",
       title: "HTML Programming",
       description:
         "HTML is a markup language used to structure and display content on websites and web applications.",
         link: "#",
     },
     {
       image: "/css.jpg",
       title: "CSS Programming",
       description:
         "CSS is a stylesheet language used to design, style, and control the layout of web pages visually.",
          link: "#",
     },
     {
       image: "/jsProg.jpg",
       title: "Java Script Programming",
       description:
         "JavaScript is a popular scripting language used to create interactive, dynamic, and responsive websites and web applications.",
          link: "#",
     },
     {
       image: "/tscript.jpg",
       title: "Type Script Programming",
       description:
         "TypeScript is a strongly typed programming language built on JavaScript for developing scalable and error-free web applications.",
          link: "#",
     },
     
   ];
 
   return (
     <section className="bg-lime-50 py-10">
       <h2 className="text-3xl font-bold text-center">Web Development programming</h2>
 
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

