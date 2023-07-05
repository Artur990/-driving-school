import { FaCar, FaSmile, FaHeartbeat, FaMoneyCheckAlt } from 'react-icons/fa';

export const Features = () => {
  const features = [
    {
      icon: <FaCar className="h-20 w-20 text-red-600" />,
      title: 'Nowe modele Toyoty',
      description:
        'W naszym ośrodku będziesz jeździł nowym modelem Toyoty identycznym jak w WORD-ie.',
    },
    {
      icon: <FaSmile className="h-20 w-20 text-red-600" />,
      title: '99% zadowolonych klientów',
      description:
        'Nauczymy Cię przepisów, techniki kierowania i myślenia za kółkiem. Wszystko pod okiem instruktorów z anielską cierpliwością.',
    },
    {
      icon: <FaHeartbeat className="h-20 w-20 text-red-600" />,
      title: 'Bez stresu',
      description:
        'W naszym Ośrodku pod okiem doświadczonych instruktorów nie musisz się stresować! Cierpliwość i wyrozumiałość - to ich główne cechy. Pozytywne podejście do Kursanta to nasza domena!',
    },
    {
      icon: <FaMoneyCheckAlt className="h-20 w-20 text-red-600" />,
      title: 'Atrakcyjne ceny rozbite w systemie ratalnym',
      description: 'Płatności możesz rozłożyć na 4 raty 0%.',
    },
  ];

  return (
    <section className="bg-zinc-800 px-4 py-32 text-white ">
      <div className="-cols-1  container  mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className=" rounded bg-transparent p-6 shadow">
            <div className="r mb-5 flex  items-center  justify-center">
              {feature.icon}
            </div>
            <h3 className="mb-2 h-14 text-center text-xl font-bold sm:h-14">
              {feature.title}
            </h3>
            <p className=" text-center text-base text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
