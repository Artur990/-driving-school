import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import RegistrationForm from './ui/RegistrationForm';

const Registration = () => {
  return (
    <section className=" flex h-auto w-full items-center justify-center p-10 py-16">
      <div>
        <h2 className="mb-8 text-center text-4xl font-bold  lg:text-5xl">
          Zapisz się na kurs jazdy już dziś!
        </h2>
        <p className="mb-2 text-center text-xl lg:mb-8">
          Zarezerwuj swoje miejsce, aby rozpocząć przygodę z nauką jazdy. Nasz
          profesjonalny zespół instruktorów jest gotowy, aby Ci pomóc. Uzupełnij
          poniższy formularz, a skontaktujemy się z Tobą w najbliższym możliwym
          terminie.
        </p>
        <div className="items-center justify-between lg:flex ">
          <div className="mb-1 flex w-full flex-col p-5 lg:mb-8 lg:w-1/2 lg:p-10 ">
            <div className="mb-3 font-bold">P.H.U. Strażak Bartosz Graboń</div>
            <div className="mb-3 flex items-center">
              <FiPhone className="mr-2 text-2xl text-red-600" />
              <span>+48 508 808 310</span>
            </div>
            <div className="mb-3 flex items-center">
              <FiMail className="mr-2 text-2xl text-red-600" />
              <span>sjstrazak@gmail.com</span>
            </div>
            <div className="mb-3 flex items-center">
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
            <p className="my-5 text-center text-xl lg:my-20">
              Niezwłocznie po otrzymaniu Twojego zgłoszenia, nasz zespół
              skontaktuje się z Tobą, aby omówić szczegóły kursu, dostępne
              terminy i odpowiedzieć na wszystkie Twoje pytania. Zapewniamy
              profesjonalną i przyjazną obsługę, aby pomóc Ci w osiągnięciu
              Twojego celu – uzyskaniu prawa jazdy.
            </p>
          </div>

          <div className="mx-auto w-full max-w-2xl lg:w-1/2 lg:p-10">
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-900">
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
