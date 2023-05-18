import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
interface SlaiderProps {}

const Carousel: FC<SlaiderProps> = ({}) => {
  const [width, setWidth] = useState<any>();
  const carousel = useRef() as any;
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <h1 className="my-16 text-center font-bold text-2xl">
        Nasze grono zadowolnych Kursantów{" "}
      </h1>
      <div className="absolut z-[0] m-0 mx-0 mt-5 w-full sm:mx-4 ">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden bg-transparent"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex bg-transparent"
          >
            {[
              "/strazak1.jpg",
              "/strazak2.jpg",
              "/strazak3.jpg",
              "/strazak4.jpg",
              "/strazak1.jpg",
              "/strazak2.jpg",
              "/strazak3.jpg",
              "/strazak4.jpg",
              "/strazak1.jpg",
              "/strazak2.jpg",
              "/strazak3.jpg",
              "/strazak4.jpg",
              // "/nag4.JPG",
            ].map((image, i) => {
              return (
                <motion.div key={i} className="min-h-[20rem] w-[100%] p-[0px]">
                  <img
                    src={image}
                    alt="img"
                    className="  pointer-events-none  m-2 h-full  w-[90%] min-w-[320px] rounded-3xl sm:min-w-[400px] "
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/nag1.jpg')" }}
      ></div>

      <div className="mb-4  rounded-md bg-zinc-800 p-5 opacity-90">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Nagrobki Andrzej Grzębski
        </h1>
      </div> */}
    </div>
  );
};

export default Carousel;
