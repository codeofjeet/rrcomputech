import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CoursCard(props) {
  return (
    <figure className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <Image
        src={props.image}
        alt={props.title}
        width={200}
        height={150}
        style={{ width: "100%", height: "auto" }}
      />

      <h3 className="text-2xl py-3 text-blue-950 font-bold">{props.title}</h3>

      <p>{props.description}</p>

      <Link href={props.link}>
        <button className="bg-red-500 text-white px-5 py-3 rounded mt-3 transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
          Read More
        </button>
      </Link>
      {/* <button className="bg-red-500 text-white px-5 py-3 rounded-full mt-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:-translate-y-1 hover:shadow-2xl">
        Read More
      </button> */}
    </figure>
  );
}
