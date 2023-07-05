'strict mode';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Modal from 'react-modal';
import Image from 'next/image';

const images = [
  { src: '/strazak1.jpg', description: 'Opis zdjęcia 1' },
  { src: '/strazak2.jpg', description: 'Opis zdjęcia 2' },
  { src: '/strazak3.jpg', description: 'Opis zdjęcia 3' },
  { src: '/strazak4.jpg', description: 'Opis zdjęcia 4' },
];

export const Gallery = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  function openModal(imgSrc: string) {
    setSelectedImg(imgSrc);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="gallery" className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative transform cursor-pointer overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(img.src)}
          >
            <Image
              width={300}
              height={200}
              src={img.src}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      >
        <button
          className="absolute right-4 top-4 text-2xl text-white"
          onClick={closeModal}
        >
          &times;
        </button>
        <Image
          width={600}
          height={500}
          src={selectedImg}
          alt="photo"
          className="max-h-full max-w-full"
        />
      </Modal>
    </section>
  );
};
