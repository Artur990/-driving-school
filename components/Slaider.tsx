import { FC, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface SlaiderProps {}

const Carousel: FC<SlaiderProps> = ({}) => {
  const controls = useAnimation();
  const [direction, setDirection] = useState(1);
  const [width, setWidth] = useState<any>();
  const carousel = useRef() as any;

  const images = [
    "/kursanci/kursant1.jpg",
    "/kursanci/kursant2.jpg",
    "/kursanci/kursant3.jpg",
    "/kursanci/kursant4.jpg",
    "/kursanci/kursant5.jpg",
    "/kursanci/kursant6.jpg",
    "/kursanci/kursant7.jpg",
    "/kursanci/kursant8.jpg",
    "/kursanci/kursant9.jpg",
    "/kursanci/kursant10.jpg",
  ].concat(
    "/kursanci/kursant1.jpg",
    "/kursanci/kursant2.jpg",
    "/kursanci/kursant3.jpg",
    "/kursanci/kursant4.jpg",
    "/kursanci/kursant5.jpg",
    "/kursanci/kursant6.jpg",
    "/kursanci/kursant7.jpg",
    "/kursanci/kursant8.jpg",
    "/kursanci/kursant9.jpg",
    "/kursanci/kursant10.jpg"
  );

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    const timeoutId = setTimeout(() => {
      controls.start({
        x: direction * width,
        transition: { duration: 5, ease: "linear" },
      });
      setDirection(-direction);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [direction, width]);

  return (
    <div className="w-full h-auto">
      <h1 className="my-16 text-center font-bold text-2xl">
        Nasze grono zadowolnych Kursantów{" "}
      </h1>
      <div className="absolute z-[0] m-0 mx-0 mt-5 w-full sm:mx-4 ">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden bg-transparent"
        >
          <motion.div
            animate={controls}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex bg-transparent"
          >
            {images.map((image, i) => {
              return (
                <motion.div key={i} className="min-h-[10rem] w-[40%] p-[0px]">
                  <Image
                    width={300}
                    height={300}
                    src={image}
                    alt="img"
                    className="pointer-events-none m-2 h-full w-[40%] min-w-[160px] rounded-3xl sm:min-w-[200px]"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

// export default Carousel;
{
  /* <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      /> */
}
