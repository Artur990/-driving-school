import React from "react";
import { FaCar, FaSmile, FaHeartbeat, FaMoneyCheckAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaCar className="w-20 h-20 text-red-600" />,
      title: "Nowe modele Toyoty",
      description:
        "W naszym ośrodku będziesz jeździł nowym modelem Toyoty identycznym jak w WORD-ie.",
    },
    {
      icon: <FaSmile className="w-20 h-20 text-red-600" />,
      title: "99% zadowolonych klientów",
      description:
        "Nauczymy Cię przepisów, techniki kierowania i myślenia za kółkiem. Wszystko pod okiem instruktorów z anielską cierpliwością.",
    },
    {
      icon: <FaHeartbeat className="w-20 h-20 text-red-600" />,
      title: "Bez stresu",
      description:
        "W naszym Ośrodku pod okiem doświadczonych instruktorów nie musisz się stresować! Cierpliwość i wyrozumiałość - to ich główne cechy. Pozytywne podejście do Kursanta to nasza domena!",
    },
    {
      icon: <FaMoneyCheckAlt className="w-20 h-20 text-red-600" />,
      title: "Atrakcyjne ceny rozbite w systemie ratalnym",
      description: "Płatności możesz rozłożyć na 4 raty 0%.",
    },
  ];

  return (
    <section className=" w-auto mx-2 px-4 text-white bg-zinc-800 lg:mx-10 py-32">
      <div className="grid  -cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className=" rounded bg-transparent shadow p-6">
            <div className="flex items-center justify-center  r  mb-5">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-base text-gray-200 pl-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
