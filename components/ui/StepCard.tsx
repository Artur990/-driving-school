import React, { useState, useRef, FC } from "react";
import { useSpring, animated } from "react-spring";
import { FaChevronDown } from "react-icons/fa";

interface StepCardProps {
  icon: number;
  title: string;
  description: string;
}

const StepCard: FC<StepCardProps> = ({ icon, title, description }) => {
  const [open, setOpen] = useState(false);
  const descriptionRef = useRef<any>(null);

  const expand = useSpring({
    height: open ? descriptionRef.current?.scrollHeight + 12 : 20,
  });

  return (
    <div className="w-full  h-auto mx-auto lg:w-2/3 p-5 sm:p-7 text-white">
      <div className="flex items-start justify-between cursor-pointer mb-4">
        <div className="relative flex items-start space-x-2">
          <animated.div
            style={expand}
            className={`absolute w-1 bg-red-600 left-5 top-16 transform -translate-y-1/2 ${
              open ? "top-[170px] sm:top-[120px] " : ""
            }`}
          />
          <h1 className="w-10 h-10 relative z-10  font-extrabold text-5xl">
            {icon}
          </h1>
          <h3 className="sm:text-2xl text-2xl">{title}</h3>
        </div>
        <FaChevronDown
          className={`w-6 h-6 transform transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        ref={descriptionRef}
        className={`overflow-hidden ${open ? "" : "h-0"}`}
      >
        <div className="px-10 text-xl">{description}</div>
      </div>
    </div>
  );
};

export default StepCard;
