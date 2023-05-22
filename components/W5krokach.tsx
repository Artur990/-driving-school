import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FaChevronDown, FaCar } from "react-icons/fa";
import { TbCircleNumber1 } from "react-icons/tb";

const Step = ({ icon, title, description }: any) => {
  const [open, setOpen] = useState(false);
  const descriptionRef = useRef<any>(null);

  const expand = useSpring({
    height: open ? descriptionRef.current?.scrollHeight + 8 : 20,
  });

  return (
    <div className="w-full  h-auto mx-auto lg:w-2/3 p-5 sm:p-7 text-white">
      <div className="flex items-start justify-between cursor-pointer mb-4">
        <div className="relative flex items-start space-x-2">
          <animated.div
            style={expand}
            className={`absolute w-1 bg-red-600 left-4 top-14 transform -translate-y-1/2 ${
              open ? "top-[170px] sm:top-[120px] " : ""
            }`}
          />
          <h1 className="w-10 h-10 relative z-10  font-extrabold text-3xl">
            {icon}
          </h1>
          <h3 className="sm:text-lg text-2xl">{title}</h3>
        </div>
        <FaChevronDown
          className={`w-6 h-6 transform transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        ref={descriptionRef}
        className={`overflow-hidden ${open ? "" : "h-0"}`}
      >
        <div className="px-10 text-xl">{description}</div>
      </div>
    </div>
  );
};
export default function Steps() {
  const steps = [
    {
      icon: 1,
      title: "Badania lekarskie",
      description:
        "Pierwszym krokiem na drodze do uzyskania prawa jazdy kat. B jest poddanie się badaniu lekarskiemu. Badanie możesz wykonać w Szkole Jazdy Strażak. Koszt badania to 200 zł. Rezerwację swojego miejsca możesz zrobić na naszej stronie klikając przycisk zapisz się online.",
    },
    {
      icon: 2,
      title: "Wniosek o wydanie prawa jazdy i numer PKK",
      description:
        "Pierwszym krokiem na drodze do uzyskania prawa jazdy kat. B jest poddanie się badaniu lekarskiemu. Badanie możesz wykonać w Szkole Jazdy Strażak. Koszt badania to 200 zł. Rezerwację swojego miejsca możesz zrobić na naszej stronie klikając przycisk zapisz się online.",
    },
    {
      icon: 3,
      title: "Kurs w Szkole Jazdy Strażak i egzaminy",
      description:
        "Pierwszym krokiem na drodze do uzyskania prawa jazdy kat. B jest poddanie się badaniu lekarskiemu. Badanie możesz wykonać w Szkole Jazdy Strażak. Koszt badania to 200 zł. Rezerwację swojego miejsca możesz zrobić na naszej stronie klikając przycisk zapisz się online.",
    },
    {
      icon: 4,
      title: "Egzamin na prawo jazdy",
      description:
        "Pierwszym krokiem na drodze do uzyskania prawa jazdy kat. B jest poddanie się badaniu lekarskiemu. Badanie możesz wykonać w Szkole Jazdy Strażak. Koszt badania to 200 zł. Rezerwację swojego miejsca możesz zrobić na naszej stronie klikając przycisk zapisz się online.",
    },
    {
      icon: 5,
      title: "Odbiór prawa jazdy",
      description:
        "Pierwszym krokiem na drodze do uzyskania prawa jazdy kat. B jest poddanie się badaniu lekarskiemu. Badanie możesz wykonać w Szkole Jazdy Strażak. Koszt badania to 200 zł. Rezerwację swojego miejsca możesz zrobić na naszej stronie klikając przycisk zapisz się online.",
    },
  ];

  return (
    <div className=" bg-zinc-800 py-10 min-w-[420px]">
      <h1 className="text-center relative z-10 text-xl p-10 text-white font-extrabold">
        Prawo jazdy w 5 krokach
      </h1>
      {steps.map((step, index) => (
        <Step key={index} {...step} />
      ))}
    </div>
  );
}
