import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import StepCard from "./ui/StepCard";

const steps = [
  {
    icon: 1,
    title: "Badania lekarskie",
    description:
      "Pierwszym krokiem na drodze do uzyskania prawa jazdy kat. B jest poddanie się badaniu lekarskiemu. Badanie możesz wykonać w Szkole Jazdy Strażak. Koszt badania to 200 zł. Rezerwację swojego miejsca możesz zrobić na naszej stronie klikając przycisk zapisz się online.",
  },
  {
    icon: 2,
    title: "Wniosek o wydanie prawa jazdy i numer PKK",
    description:
      "Z badaniami należy udać się do Wydziału Komunikacji w Bydgoszczy i złożyć wniosek o wydanie numeru PKK (Profil Kursanta Kierowcy). Do wniosku trzeba dołączyć fotografię odpowiednią do prawa jazdy. ",
  },
  {
    icon: 3,
    title: "Kurs w Szkole Jazdy Strażak i egzaminy",
    description:
      "Czas rozpocząć zajęcia teoretyczne i 30 godzin jazd praktycznych (po 60 minut). Egzaminy wewnętrzne z teorii i praktyki są GRATIS dla naszych kursantów.",
  },
  {
    icon: 4,
    title: "Egzamin na prawo jazdy",
    description:
      "Na egzamin na prawo jazdy zapisujesz się w Wojewódzkim Ośrodku Ruchu Drogowego (WORD) Bydgoszcz. Będąc po 30 praktycznych godzinach jazd pod okiem najlepszych instruktorów, możesz być spokojny o wynik :) ",
  },
  {
    icon: 5,
    title: "Odbiór prawa jazdy",
    description:
      "Gratulacje! Uzyskanie pozytywnego wyniku z egzaminu praktycznego w WORD rozpoczyna ostatni, formalny już etap procedury uzyskiwania prawa jazdy kat. B. WORD wysyła informację o wyniku egzaminu do urzędu, w którym złożyliśmy wniosek o wydanie prawa jazdy. Od momentu, kiedy dokonasz opłaty w urzędzie, Twoje prawo jazdy powinno być gotowe w ciągu 9 dni roboczych. ",
  },
];
export default function FiveSteps() {
  return (
    <section>
      <div id="five-steps" className=" bg-zinc-800 py-10 min-w-[420px]">
        <h1 className="text-center relative z-9 text-3xl  xl:text-4xl p-10 text-red-600 font-extrabold">
          Prawo jazdy w 5 krokach
        </h1>
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
        <h2 className="text-white text-5xl text-center font-bold p-10 pt-32">
          Wybierz mądrze i zdaj! Postaw na szkołę nauki jazdy, którą polecają
          nasi kursanci!{" "}
          <span className="relative top-2 inline-block ">
            <CiFaceSmile className="ml-2 text-red-600 " />
          </span>
        </h2>
      </div>
      <div className="relative mt-20">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-15 border-r-15 border-transparent border-b-30 border-solid border-red-500 bg-red-500"></div>
        </div>
      </div>
    </section>
  );
}
