import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { ContactForm } from './ui/ContactForm';

export const Contact = () => {
  return (
    <section className="container mx-auto h-auto w-full lg:p-10 ">
      <h2 className="mb-1 ml-6 mt-10 hidden text-center text-3xl  font-extrabold  lg:block xl:text-4xl">
        Masz pytanie?
        <br /> Skontaktuj się z nami!
      </h2>
      <div className="lg:flex">
        <div className="24 relative mx-auto flex h-auto   w-full max-w-5xl items-start bg-white p-2  sm:px-10  lg:w-1/2 lg:px-0 2xl:h-[100vh]">
          <div className="pt-20">
            <h1 className="mb-4 ml-6 block text-4xl  font-bold lg:hidden">
              Skontaktuj się z nami!
            </h1>
            <p className="mb-8 ml-6 text-left text-xl">
              Skontaktuj się z nami, a odpowiemy na wszystkie Twoje pytania.
              Wypełnij dane w formularzu, a skontaktujemy się z Tobą jak
              najszybciej, aby przedstawić szczegóły kursu! Czekamy na kontakt!
            </p>
            <div className="mb-4 ml-6 flex flex-col items-start ">
              <div className="my-3 flex items-center justify-center font-bold">
                P.H.U. Strażak Bartosz Graboń
              </div>

              <div className="my-3 flex items-center justify-center">
                <FiPhone className="mr-2 text-2xl text-red-600" />
                <span>+48 508 808 310 </span>
              </div>
              <div className="my-3 flex items-center justify-center">
                <FiMail className="mr-2 text-2xl text-red-600" />
                <span>sjstrazak@gmail.com </span>
              </div>
              <div className="my-3 flex items-center justify-center">
                <TbBuildingSkyscraper className="mr-2 text-2xl text-red-600" />
                <span>
                  <span className="font-bold">Teoria: </span>
                  Szkoła Podstawowa nr 14 przy ul. Żmudzka 12, Bydgoszcz
                </span>
              </div>
              <div className="my-3 flex items-center justify-center">
                <FiMapPin className="mr-2 text-2xl text-red-600" />
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
          className="relative mx-auto  h-auto w-4/5 max-w-5xl bg-white px-4 py-5 sm:px-10 lg:w-1/2 lg:px-24"
        >
          <div className="8  isolate z-30 bg-white py-4 sm:py-2 lg:px-0">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:hidden">
                FORMULARZ KONTAKTOWY
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
