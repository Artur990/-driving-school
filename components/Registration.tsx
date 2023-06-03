import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import RegistrationForm from "./ui/RegistrationForm";

const Registration = () => {
  return (
    <section className="h-auto w-full p-10 flex justify-center items-center">
      <div className="">
        <h2 className="text-center text-4xl lg:text-5xl font-bold  mb-8">
          Zapisz się na kurs jazdy już dziś!
        </h2>
        <p className="text-xl text-center mb-2 lg:mb-8">
          Zarezerwuj swoje miejsce, aby rozpocząć przygodę z nauką jazdy. Nasz
          profesjonalny zespół instruktorów jest gotowy, aby Ci pomóc. Uzupełnij
          poniższy formularz, a skontaktujemy się z Tobą w najbliższym możliwym
          terminie.
        </p>
        <div className="lg:flex justify-between items-center ">
          <div className="flex flex-col p-5 lg:p-10 mb-1 lg:mb-8 w-full lg:w-1/2 ">
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
            <p className="text-xl text-center my-5 lg:my-20">
              Niezwłocznie po otrzymaniu Twojego zgłoszenia, nasz zespół
              skontaktuje się z Tobą, aby omówić szczegóły kursu, dostępne
              terminy i odpowiedzieć na wszystkie Twoje pytania. Zapewniamy
              profesjonalną i przyjazną obsługę, aby pomóc Ci w osiągnięciu
              Twojego celu – uzyskaniu prawa jazdy.
            </p>
          </div>

          <div className="max-w-2xl w-full lg:w-1/2 lg:p-10 mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Formularz rejestracyjny:
            </h2>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
