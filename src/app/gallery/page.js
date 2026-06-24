"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200",
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=1200",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1200",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200",
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Our Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Gallery ${index}`}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 bg-white text-black p-3 rounded-full shadow-lg hover:rotate-90 transition duration-300"
              >
                <X size={28} />
              </button>

              <Image
                src={selectedImage}
                alt="Full Size"
                width={1600}
                height={1000}
                className="w-full max-h-[90vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}