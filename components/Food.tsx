import React from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "200px",
  height: "400px",
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
    <div className="w-full h-[500px] bg-zinc-800 flex justify-between p-20 px-52 ">
      <div className="flex flex-col justify-center items-center w-1/4">
        <img className="h-28 w-36 bg-black" src="/logo.jpg" alt="logo" />
        <p className="text-center text-white">
          Szkoła Jazdy Strażak założona przez bydgoskiego strażaka, została
          stworzona z ideą pomagania ludziom, aby mogli łatwo i bez stresu
          zdobyć wymarzone prawo jazdy.{" "}
        </p>
        <p className="text-center text-white">
          Wybierz mądrze i zdaj! Postaw na szkołę nauki jazdy, którą polecają
          kursanci i ciesz się niezależnością oraz przyjemnością samodzielnej
          jazdy.
        </p>
      </div>
      <div></div>
      <div className="relative ">
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default Food;
