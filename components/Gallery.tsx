import React from "react";
import "tailwindcss/tailwind.css";

const images = [
  "/strazak1.jpg",
  "/strazak2.jpg",
  "/strazak3.jpg",
  "/strazak4.jpg",
];

const Gallery = () => {
  return (
    <div className="flex justify-center my-10 items-center min-h-auto bg-gray-100 overflow-hidden">
      <div className="flex space-x-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-72 m-5  rounded-lg h-72 relative overflow-hidden transform transition-transform duration-300 ${
              index === 0 || index === 2 || index === 3
                ? "rotate-3"
                : "-rotate-3"
            }`}
          >
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="  object-center w-full h-full absolute top-0 left-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
