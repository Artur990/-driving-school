import { FC } from "react";
import Form from "./Form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { TbBuildingSkyscraper } from "react-icons/tb";

const RegistrationForm = () => {
  return (
    <section className="h-auto w-full p-10 flex justify-center items-center">
      <div className="">
        <h2 className="text-center text-4xl lg:text-5xl font-bold  mb-8">
          Zapisz się na kurs jazdy już dziś!
        </h2>
        <p className="text-xl text-center mb-8">
          Zarezerwuj swoje miejsce, aby rozpocząć przygodę z nauką jazdy. Nasz
          profesjonalny zespół instruktorów jest gotowy, aby Ci pomóc. Uzupełnij
          poniższy formularz, a skontaktujemy się z Tobą w najbliższym możliwym
          terminie.
        </p>
        <div className="lg:flex justify-between items-center ">
          <div className="flex flex-col p-10 mb-8 w-full lg:w-1/2 ">
            <div className="font-bold mb-3">P.H.U. Strażak Bartosz Graboń</div>
            <div className="flex items-center mb-3">
              <FiPhone className="mr-2 text-2xl text-red-600" />
              <span>+48 508 808 310</span>
            </div>
            <div className="flex items-center mb-3">
              <FiMail className="mr-2 text-2xl text-red-600" />
              <span>sjstrazak@gmail.com</span>
            </div>
            <div className="flex items-center mb-3">
              <TbBuildingSkyscraper className="mr-2 text-2xl text-red-600" />
              <span>
                <span className="font-bold">Teoria: </span>
                Szkoła Podstawowa nr 14 przy ul. Żmudzka 12, Bydgoszcz
              </span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-2 text-2xl text-red-600" />
              <span>
                <span className="font-bold">Jazdy: </span>
                Parking Biedronki ul. Gajowa 7, przy rondzie fordońskim
              </span>
            </div>
            <p className="text-xl text-center my-20">
              Niezwłocznie po otrzymaniu Twojego zgłoszenia, nasz zespół
              skontaktuje się z Tobą, aby omówić szczegóły kursu, dostępne
              terminy i odpowiedzieć na wszystkie Twoje pytania. Zapewniamy
              profesjonalną i przyjazną obsługę, aby pomóc Ci w osiągnięciu
              Twojego celu – uzyskaniu prawa jazdy.
            </p>
          </div>
          <div className="max-w-2xl w-full lg:w-1/2 p-10 mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Formularz rejestracyjny:
            </h2>
            <form
              // onSubmit={formik.handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
            >
              <div className="col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Imię i Nazwisko
                </label>
                <input
                  // value={formik.values.firstName}
                  // onChange={formik.handleChange}
                  placeholder="Imię"
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-600">{formik.errors.firstName}</div>
          )} */}
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <input
                  //   value={formik.values.email}
                  //   onChange={formik.handleChange}
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {formik.touched.email && formik.errors.email && (
<div className="text-red-600">{formik.errors.email}</div>
)} */}
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold ring-indigo-600 leading-6 text-gray-900"
                >
                  Numer telefonu
                </label>
                <input
                  //   value={formik.values.phoneNumber}
                  //   onChange={formik.handleChange}
                  placeholder="Numer telefonu"
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="phoneNumber"
                  className="block w-full rounded-md border-0  px-3.5 py-2 pl-4   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {formik.touched.phoneNumber && formik.errors.phoneNumber && (
<div className="text-red-600">{formik.errors.phoneNumber}</div>
)} */}
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="preferred-date"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Dogodna data kursu
                </label>
                <div className="mt-2.5">
                  <input
                    // value={preferredDate}
                    // onChange={handleDateChange}
                    placeholder="Dogodna data kursu"
                    type="text"
                    name="preferredDate"
                    id="preferredDate"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  WYŚLIJ WIADOMOŚĆ
                </label>
                <textarea
                  //   value={formik.values.message}
                  //   onChange={formik.handleChange}
                  placeholder="Wiadomość"
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {formik.touched.message && formik.errors.message && (
<div className="text-red-600">{formik.errors.message}</div>
)} */}
              </div>
              <div className="mt-10 col-span-2">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-[#d71f27] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default RegistrationForm;
