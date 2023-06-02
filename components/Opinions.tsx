import React from "react";

const Slide = ({ avatar, name, date, stars, content }: any) => {
  return (
    <div className="slide w-350 h-160 bg-white rounded-md shadow-lg p-4">
      <div className="flex items-center">
        <div className="mr-4">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex">
          {Array.from({ length: stars }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1L6 7h7l-5 4 2 7L10 13l-5 4 2-7-5-4h7l-4-6z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.5 2H12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7.5l-2 2H5v-2H2.5a2.5 2.5 0 0 1-2.5-2.5v-11a2.5 2.5 0 0 1 2.5-2.5h12A2.5 2.5 0 0 1 15 2.5V4H7.5V2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <p className="mt-4">{content}</p>
    </div>
  );
};

const Slider = () => {
  const slides = [
    {
      id: 1,
      avatar: "link do avatara 1",
      name: "Imię i Nazwisko 1",
      date: "01.06.2023",
      stars: 5,
      content: "Treść opinii 1",
    },
    {
      id: 2,
      avatar: "link do avatara 2",
      name: "Imię i Nazwisko 2",
      date: "02.06.2023",
      stars: 4,
      content: "Treść opinii 2",
    },
    // Dodaj więcej slajdów według potrzeb
  ];

  return (
    <div className="flex overflow-x-scroll">
      {slides.map((slide) => (
        <Slide
          key={slide.id}
          avatar={slide.avatar}
          name={slide.name}
          date={slide.date}
          stars={slide.stars}
          content={slide.content}
        />
      ))}
    </div>
  );
};

export default function Opinions() {
  return (
    <div className="container mx-auto mt-4">
      <Slider />
    </div>
  );
}
