import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Modal from "react-modal";
import Image from "next/image";

const images = [
  { src: "/strazak1.jpg", description: "Opis zdjęcia 1" },
  { src: "/strazak2.jpg", description: "Opis zdjęcia 2" },
  { src: "/strazak3.jpg", description: "Opis zdjęcia 3" },
  { src: "/strazak4.jpg", description: "Opis zdjęcia 4" },
];

const Gallery = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<any>(null);

  function openModal(imgSrc: any) {
    setSelectedImg(imgSrc);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container mx-auto p-4 my-16 sm:p-6 lg:p-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(img.src)}
          >
            <img
              src={img.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
              {/* <p className="text-white opacity-0 group-hover:opacity-100">
                {img.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={closeModal}
        >
          &times;
        </button>
        <Image
          width={600}
          height={600}
          alt="img"
          src={selectedImg}
          className="max-h-full max-w-full"
        />
      </Modal>
    </div>
  );
};

export default Gallery;
