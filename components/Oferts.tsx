import { useState } from 'react';
import { FaCar, FaMotorcycle, FaTruckMoving, FaBusAlt } from 'react-icons/fa';
import Car from './oferts/Car';
import MotorCycle from './oferts/MotorCycle';
import Track from './oferts/Track';
import Bus from './oferts/Bus';
import Image from 'next/image';

const Oferts = () => {
  const [activeTab, setActiveTab] = useState('car');
  return (
    <section className=" bg-white py-12 sm:py-10">
      <div className="mx-auto max-w-7xl bg-white px-6 lg:px-8">
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
          <h2 className="text-center text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
            Szkoła jazdy Strażak
          </h2>
          <p className="text-bold mt-6 text-lg leading-8 text-gray-600">
            Dołącz do grona zadowolonych kierowców i zacznij swoją przygodę z
            prowadzeniem pojazdów w najlepszej szkole jazdy w Bydgoszczy.
            Oferujemy kompleksowe kursy na samochód, motor, ciężarówkę i
            autobus, które przygotują Cię do bezpiecznej i pewnej jazdy na
            każdym rodzaju drogi. Skorzystaj z naszej bogatej oferty i zapisz
            się już dzisiaj na kurs, który otworzy przed Tobą nowe możliwości i
            da Ci wolność poruszania się na własnych zasadach!
          </p>
          <h3 className=" mb-5 mt-10 text-center text-2xl font-bold tracking-tight text-black sm:text-xl">
            wybierz kategorie:
          </h3>
          <div className="m-4 flex justify-center space-x-4">
            <div
              onClick={() => setActiveTab('car')}
              className={`border-b-4 ${
                activeTab === 'car' ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <FaCar className="h-10 w-10 cursor-pointer text-gray-600 hover:text-indigo-600" />
            </div>
            <div
              onClick={() => setActiveTab('motorcycle')}
              className={`border-b-4 ${
                activeTab === 'motorcycle'
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            >
              <FaMotorcycle className="h-10 w-10 cursor-pointer text-gray-600 hover:text-indigo-600" />
            </div>
            <div
              onClick={() => setActiveTab('truck')}
              className={`border-b-4 ${
                activeTab === 'truck' ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <FaTruckMoving className="h-10 w-10 cursor-pointer text-gray-600 hover:text-indigo-600" />
            </div>
            <div
              onClick={() => setActiveTab('bus')}
              className={`border-b-4 ${
                activeTab === 'bus' ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <FaBusAlt className="h-9 w-9 cursor-pointer text-gray-600 hover:text-indigo-600" />
            </div>
          </div>
        </div>
        {activeTab === 'car' && <Car />}
        {activeTab === 'motorcycle' && <MotorCycle />}
        {activeTab === 'truck' && <Track />}
        {activeTab === 'bus' && <Bus />}
      </div>
    </section>
  );
};

export default Oferts;
