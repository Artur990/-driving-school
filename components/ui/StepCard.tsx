import React, { useState, useRef, FC } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaChevronDown } from 'react-icons/fa';

interface StepCardProps {
  icon: number;
  title: string;
  description: string;
}

const StepCard: FC<StepCardProps> = ({ icon, title, description }) => {
  const [open, setOpen] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const expand = useSpring({
    height: open ? (descriptionRef.current?.scrollHeight ?? 0) + 12 : 20,
  });
  return (
    <div className="mx-auto  h-auto w-full p-5 text-white sm:p-7 lg:w-2/3">
      <div className="mb-4 flex cursor-pointer items-start justify-between">
        <div className="relative flex items-start space-x-2">
          <animated.div
            style={expand}
            className={`absolute left-5 top-16 w-1 -translate-y-1/2 transform bg-red-600 ${
              open ? 'top-[170px] sm:top-[120px] ' : ''
            }`}
          />
          <h1 className="relative z-10 h-10 w-10  text-5xl font-extrabold">
            {icon}
          </h1>
          <h3 className="text-2xl sm:text-2xl">{title}</h3>
        </div>
        <FaChevronDown
          className={`h-6 w-6 transform transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        ref={descriptionRef}
        className={`overflow-hidden ${open ? '' : 'h-0'}`}
      >
        <div className="px-10 text-xl">{description}</div>
      </div>
    </div>
  );
};

export default StepCard;
