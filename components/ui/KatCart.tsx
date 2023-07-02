import Image from 'next/image';
import { FC } from 'react';

interface KatCartProps {
  title: string;
  children: React.ReactNode;
  imgSrc: string;
}

const KatCart: FC<KatCartProps> = ({ title, children, imgSrc }) => {
  return (
    <div
      className="w-full] m-1 mx-auto my-3 max-w-md transform overflow-hidden rounded-xl transition-transform duration-200 ease-in-out  sm:m-3 md:max-w-3xl lg:m-4"
      style={{
        boxShadow: '0px 0px 10px 0px #393e46',
      }}
    >
      <div className="md:flex">
        <div className="my-auto hidden h-48 max-h-[340px] items-center justify-center md:h-3/4 md:w-48 md:flex-shrink-0 ">
          <Image
            width={500}
            height={300}
            className=" h-full w-[90%] rounded-md  object-cover"
            src={imgSrc}
            alt={title}
          />
        </div>
        <div className="p-8">
          <h2 className="text-xl font-semibold uppercase tracking-wide text-red-500 ">
            {title}
          </h2>
          <div className="mt-2 text-gray-500">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default KatCart;
