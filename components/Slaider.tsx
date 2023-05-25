// import { FC, useEffect, useRef, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";

// interface SliderProps {}

// const Carousel: FC<SliderProps> = ({}) => {
//   const controls = useAnimation();
//   const [width, setWidth] = useState<number>(0);
//   const carousel = useRef<HTMLDivElement>(null);

//   const images = [
//     "/kursanci/kursant1.jpg",
//     "/kursanci/kursant2.jpg",
//     "/kursanci/kursant3.jpg",
//     "/kursanci/kursant4.jpg",
//     "/kursanci/kursant5.jpg",
//     "/kursanci/kursant6.jpg",
//     "/kursanci/kursant7.jpg",
//     "/kursanci/kursant8.jpg",
//     "/kursanci/kursant9.jpg",
//     "/kursanci/kursant10.jpg",
//   ];

//   const totalImages = images.length;

//   useEffect(() => {
//     if (carousel.current) {
//       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     }
//   }, []);

//   useEffect(() => {
//     const animate = async () => {
//       for (let i = 0; i < totalImages; i++) {
//         await controls.start({
//           x: -(i * (width / totalImages)),
//           transition: { duration: 2, ease: "linear" },
//         });
//       }
//       controls.start({
//         x: 0,
//         transition: { duration: 0 },
//       });
//       animate();
//     };
//     animate();
//   }, [width]);

//   return (
//     <div className="w-full h-auto">
//       <h1 className="my-16 text-center font-bold text-2xl">
//         Nasze grono zadowolonych Kursantów{" "}
//       </h1>
//       <div className="relative z-0 m-0 mx-0 mt-5 w-full sm:mx-4 ">
//         <motion.div
//           ref={carousel}
//           whileTap={{ cursor: "grabbing" }}
//           className="cursor-grab overflow-hidden bg-transparent"
//         >
//           <motion.div animate={controls} className="flex bg-transparent">
//             {images.map((image, i) => {
//               return (
//                 <motion.div key={i} className="min-h-[10rem] w-[40%] p-[0px]">
//                   <Image
//                     width={300}
//                     height={300}
//                     src={image}
//                     alt="img"
//                     className="pointer-events-none m-2 h-full w-[40%] min-w-[160px] rounded-3xl sm:min-w-[200px]"
//                   />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
