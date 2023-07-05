import Image from 'next/image';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

interface CaruselCardProps {
  images: string[][];
}

export const CaruselCard: FC<CaruselCardProps> = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      interval={3000}
      showIndicators={false}
      centerMode={true}
      centerSlidePercentage={60}
    >
      {images.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="flex items-center justify-center space-x-4"
        >
          {group.map((img, imgIndex) => (
            <div key={imgIndex} className="h-32 w-[500px] p-1 lg:h-40 lg:w-56">
              <Image
                width={200}
                height={200}
                src={img}
                alt={`happy client ${groupIndex * 4 + imgIndex + 1}`}
                className="m-1 ml-3 mr-3 h-full w-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};
