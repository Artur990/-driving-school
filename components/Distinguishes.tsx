import { FC } from "react";
import { FaAward, FaBuilding, FaCar, FaHandshake } from "react-icons/fa";
interface DistinguishesProps {}
const features = [
  {
    icon: <FaCar className="w-20 h-20 " />, // Zaktualizuj ikonę zgodnie z Twoim projektem
    title: "Sprawny i czysty samochód",
    description:
      "Spędzisz przynajmniej 30 godzin w naszym samochodzie. Oprócz dobrego instruktora przydałoby się przyjemne i czyste wnętrze, prawda? Nie chcemy, aby cokolwiek Cię rozpraszało, dlatego nasze samochody wyglądają jak nowe.",
  },
  {
    icon: <FaHandshake className="w-20 h-20 " />, // Zaktualizuj ikonę zgodnie z Twoim projektem
    title: "Jazdy w rejonie egzaminacyjnym",
    description:
      "Na kursie pokażemy Ci najpopularniejsze trasy egzaminacyjne i nauczymy jak prawidłowo się po nich poruszać. Oswoisz się z podchwytliwymi miejscami i będziesz się mniej stresować. Dzięki temu potraktujesz egzamin jak po prostu kolejną godzinę jazd w Szkole Jazdy Strażak.",
  },
  {
    icon: <FaBuilding className="w-20 h-20 " />, // Zaktualizuj ikonę zgodnie z Twoim projektem
    title: "Instruktorzy nie załatwiają prywatnych spraw",
    description:
      "Jeździmy tylko tam gdzie trzeba, czyli trasą, która pozwoli Ci szybko i skutecznie nabyć niezbędne umiejętności. L-ka to nie taksówka. Czas jazdy to czas, który poświęcamy tylko na jazdę z Tobą.",
  },
  {
    icon: <FaAward className="w-20 h-20 " />, // Zaktualizuj ikonę zgodnie z Twoim projektem
    title: "Mamy najlepszych instruktorów w mieście!",
    description:
      "Dlaczego możemy tak sądzić? Mamy imponującą liczbę kursantów zdających za pierwszym razem oraz setki pozytywnych opinii. Cieszy nas również, że nasi instruktorzy to nie tylko znakomici fachowcy od ruchu drogowego, ale po prostu fajni ludzie.",
  },
];
const Distinguishes: FC<DistinguishesProps> = ({}) => {
  return (
    <section id="co-nas-wyroznia" className="container mx-auto px-4">
      <h1 className="text-center relative z-9 text-3xl  xl:text-4xl p-10  font-extrabold">
        Co nas wyróżnia?
      </h1>
      <p className="mb-10 text-center">
        Wybór odpowiedniej szkoły jazdy to ważna decyzja! Poznaj nasze przewagi,
        dzięki którym szybciej nabierzesz odpowiednich nawyków i z większą
        pewnością podejdziesz do egzaminu.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="rounded bg-white shadow p-6">
            <div className="flex items-center justify-center rounded-full text-black mb-5">
              {feature.icon}
            </div>
            <h3 className="text-xl text-center font-bold mb-2">
              {feature.title}
            </h3>
            <p className="text-base text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Distinguishes;
