import Image from 'next/image';
import { FC } from 'react';

interface InstructorCardProps {
  name: string;
  image: string;
}

export const InstructorCard: FC<InstructorCardProps> = ({ name, image }) => {
  return (
    <div className="m-6 flex h-3/4 w-full lg:w-1/3  lg:flex-col ">
      <div className="mr-4 h-1/4 w-full bg-gray-500 sm:h-1/4 sm:w-full">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="h-full w-full rounded-lg"
        />
      </div>
      <div className="mr-4 h-24 w-full sm:h-32 sm:w-1/2">
        <h3 className="m-2 text-2xl font-semibold ">{name}</h3>
      </div>
    </div>
  );
};
