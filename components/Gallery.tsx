"strict mode";
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
    <div id="gallery" className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(img.src)}
          >
            <Image
              width={300}
              height={200}
              src={img.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
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
          width={400}
          height={300}
          src={selectedImg}
          alt="photo"
          className="max-h-full max-w-full"
        />
      </Modal>
    </div>
  );
};

export default Gallery;
