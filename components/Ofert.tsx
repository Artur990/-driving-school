import Link from "next/link";
import { FC } from "react";
import { useState } from "react";
import { FaCar, FaMotorcycle, FaTruckMoving, FaBusAlt } from "react-icons/fa";
import Car from "./oferts/Car";
import MotorCycle from "./oferts/MotorCycle";
import Track from "./oferts/Track";
import Bus from "./oferts/Bus";
import Image from "next/image";

interface OfertProps {}

const Ofert = () => {
  const [activeTab, setActiveTab] = useState("car");
  return (
    <div className=" py-12 sm:py-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-2xl sm:text-center">
          <div className="flex items-center justify-center">
            <Image
              width={100}
              height={100}
              className="h-20 w-28"
              src="/logo.jpg"
              alt="logo"
            />
          </div>
          <h2 className="text-3xl text-center font-bold tracking-tight text-red-600 sm:text-4xl">
            Szkoła jazdy Strażak
          </h2>
          <p className="mt-6 text-lg text-bold leading-8 text-gray-600">
            Dołącz do grona zadowolonych kierowców i zacznij swoją przygodę z
            prowadzeniem pojazdów w najlepszej szkole jazdy w Bydgoszczy.
            Oferujemy kompleksowe kursy na samochód, motor, ciężarówkę i
            autobus, które przygotują Cię do bezpiecznej i pewnej jazdy na
            każdym rodzaju drogi. Skorzystaj z naszej bogatej oferty i zapisz
            się już dzisiaj na kurs, który otworzy przed Tobą nowe możliwości i
            da Ci wolność poruszania się na własnych zasadach!
          </p>
          <h3 className=" text-center text-2xl font-bold mb-5 tracking-tight text-black sm:text-xl mt-10">
            wybierz kategorie:
          </h3>
          <div className="flex justify-center space-x-4 m-4">
            <div
              onClick={() => setActiveTab("car")}
              className={`border-b-4 ${
                activeTab === "car" ? "border-red-500" : "border-gray-300"
              }`}
            >
              <FaCar className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            </div>
            <div
              onClick={() => setActiveTab("motorcycle")}
              className={`border-b-4 ${
                activeTab === "motorcycle"
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <FaMotorcycle className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            </div>
            <div
              onClick={() => setActiveTab("truck")}
              className={`border-b-4 ${
                activeTab === "truck" ? "border-red-500" : "border-gray-300"
              }`}
            >
              <FaTruckMoving className="h-10 w-10 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            </div>
            <div
              onClick={() => setActiveTab("bus")}
              className={`border-b-4 ${
                activeTab === "bus" ? "border-red-500" : "border-gray-300"
              }`}
            >
              <FaBusAlt className="h-9 w-9 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            </div>
          </div>
        </div>
        {activeTab === "car" && <Car />}
        {activeTab === "motorcycle" && <MotorCycle />}
        {activeTab === "truck" && <Track />}
        {activeTab === "bus" && <Bus />}
      </div>
    </div>
  );
};

export default Ofert;
