import React from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { BsBuildings } from 'react-icons/bs';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import Image from 'next/image';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 53.116084,
  lng: 18.019848,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD2EHiEbzUSpWlzAwh872NNkivXSW9CKhk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} />
    </LoadScript>
  );
};

const Food = () => {
  return (
    <>
      <div className=" mx-auto block  w-full  justify-between bg-zinc-800 text-white lg:flex lg:min-h-[70%] lg:w-[95%]  ">
        <div className="flex w-full flex-col items-center  lg:w-1/2">
          <div className="flex w-full flex-col items-center   justify-center p-2 pb-0 lg:flex-row lg:items-start  xl:p-24 xl:pb-2    ">
            <Image
              width={200}
              height={200}
              src="/logo2.png"
              alt="logo"
              className="h-32 w-1/3 text-white"
            />
            <div className="w-2/3">
              <h2 className="my-5 text-2xl font-extrabold">
                P.H.U. Strażak Bartosz Graboń
              </h2>
              <h3 className="mb-10 text-xl font-bold">Szkoła Jazdy Strażak </h3>
              <p className="my-3 text-gray-400">
                Szkoła Jazdy Strażak założona przez bydgoskiego strażaka,
                została stworzona z ideą pomagania ludziom, aby mogli łatwo i
                bez stresu zdobyć wymarzone prawo jazdy.{' '}
              </p>
              <p className="my-3 text-gray-400">
                <span className="font-bold text-white">E-mail:</span>{' '}
                sjstrazak@gmail.com
                <br />
                <span className="font-bold text-white">Santander: </span>37 1090
                1346 0000 0001 0442 0911
                <br />
                <span className="font-bold text-white">Teoria:</span> Szkoła
                Podstawowa nr 14 przy ul. Żmudzka 12, Bydgoszcz
                <br />
                <span className="font-bold text-white">Jazdy:</span> Parking
                Biedronki ul. Gajowa 7, przy rondzie fordońskim
              </p>
            </div>
          </div>
          <div className="h-[1px] w-3/5 bg-white"></div>
          <h2 className="my-0 text-2xl font-extrabold text-red-500">
            Kontakt Telefoniczny{' '}
          </h2>
          <h2 className="my-0 text-2xl font-extrabold">+48 508 808 310 </h2>
        </div>
        <div className=" w-3/2 lg:w-1/2 ">
          <GoogleMapComponent />
        </div>
      </div>
      <div className="mx-auto mb-20 flex h-[200px] w-full items-center justify-center bg-stone-900 lg:w-[95%] ">
        <h2 className="text-center text-white">
          © 2022 Wszelkie prawa zastrzeżone. Szkoła jazdy Strażak Bydgoszcz
          Polityka Prywatności
        </h2>
      </div>
    </>
  );
};

export default Food;
