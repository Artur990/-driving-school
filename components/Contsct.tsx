import { FC } from "react";
import Form from "./Form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { TbBuildingSkyscraper } from "react-icons/tb";
interface ContsctProps {}

const Contsct: FC<ContsctProps> = ({}) => {
  return (
    <section className="h-auto w-full lg:flex ">
      <div className="relative mx-auto lg:w-1/2 w-4/5  my-10 flex h-auto max-w-5xl items-center bg-white  sm:px-10  lg:px-0 24 2xl:h-[100vh]">
        <div>
          <h1 className="mb-4 ml-6  text-4xl font-bold">
            Skontaktuj się z nami!
          </h1>
          <p className="mb-8 ml-6 text-left text-xl">
            Skontaktuj się z nami, a odpowiemy na wszystkie Twoje pytania.
            Wypełnij dane w formularzu, a odpiszemy jak najszybciej, jak to
            tylko możliwe. Czekamy na kontakt!
          </p>
          <div className="mb-4 ml-6 flex flex-col items-start ">
            <div className="my-3 flex items-center justify-center font-bold">
              {/* <FiMapPin className="mr-2 text-2xl" /> */}
              {/* <span>ul. Osiedlowa 17, 09-227 Gójsk</span> */}
              P.H.U. Strażak Bartosz Graboń
            </div>

            <div className="my-3 flex items-center justify-center">
              <FiPhone className="mr-2 text-2xl" />
              <span>+48 508 808 310 </span>
            </div>
            <div className="my-3 flex items-center justify-center">
              <FiMail className="mr-2 text-2xl" />
              <span>sjstrazak@gmail.com </span>
            </div>
            <div className="my-3 flex items-center justify-center">
              <TbBuildingSkyscraper className="mr-2 text-2xl" />
              <span>
                <span className="font-bold">Teoria: </span>
                Szkoła Podstawowa nr 14 przy ul. Żmudzka 12, Bydgoszcz
              </span>
            </div>
            <div className="my-3 flex items-center justify-center">
              <FiMapPin className="mr-2 text-2xl" />
              <span>
                <span className="font-bold">Jazdy: </span>
                Parking Biedronki ul. Gajowa 7, przy rondzie fordońskim
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div
        id="form"
        className="relative mx-auto h-auto lg:w-1/2 w-4/5 max-w-5xl bg-white px-4 py-5 sm:px-10 lg:px-24"
      >
        <div className="isolate  z-30 bg-white py-4 sm:py-2 lg:px-0 8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="lg:hidden text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              FORMULARZ KONTAKTOWY
            </h2>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contsct;
