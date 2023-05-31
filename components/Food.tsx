import React from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { BsBuildings } from "react-icons/bs";
import { TbBuildingSkyscraper } from "react-icons/tb";

const containerStyle = {
  width: "100%",
  height: "100%",
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
      <div className="w-[95%]  mx-auto h-auto lg:h-[700px] bg-zinc-800 block lg:flex justify-between text-white  ">
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="flex h-auto w-full p-2 pb-0 xl:p-24 xl:pb-2  justify-center lg-1/2    ">
            <img
              src="/logo2.png"
              alt="logo"
              className="h-32 w-1/4 text-white"
            />
            <div className="w-2/3">
              <h2 className="text-2xl my-5 font-extrabold">
                P.H.U. Strażak Bartosz Graboń
              </h2>
              <h3 className="text-xl mb-10 font-bold">Szkoła Jazdy Strażak </h3>
              <p className="my-3 text-gray-400">
                Szkoła Jazdy Strażak założona przez bydgoskiego strażaka,
                została stworzona z ideą pomagania ludziom, aby mogli łatwo i
                bez stresu zdobyć wymarzone prawo jazdy.{" "}
              </p>
              <p className="my-3 text-gray-400">
                <span className="font-bold text-white">E-mail:</span>{" "}
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
          <div className="w-3/5 h-[1px] bg-white"></div>
          <h2 className="text-2xl my-0 text-gray-500 font-extrabold">
            Kontakt Telefoniczny{" "}
          </h2>
          <h2 className="text-2xl my-0 font-extrabold">+48 508 808 310 </h2>
        </div>
        <div className=" w-1/2 lg:w-1/2 ">
          <GoogleMapComponent />
        </div>
      </div>
      <div className="w-[95%] mx-auto h-[200px] bg-stone-900 flex justify-center items-center mb-20 ">
        <h2 className="text-white">
          © 2022 Wszelkie prawa zastrzeżone. Szkoła jazdy Strażak Bydgoszcz
          Polityka Prywatności
        </h2>
      </div>
    </>
  );
};

export default Food;
