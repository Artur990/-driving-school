import Image from "next/image";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";

interface CaruselCardProps {
  images: string[][];
}

const CaruselCard: FC<CaruselCardProps> = ({ images }) => {
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
          className="flex justify-center items-center space-x-4"
        >
          {group.map((img, imgIndex) => (
            <div key={imgIndex} className="w-[400px]  h-32 lg:w-40 lg:h-40">
              <Image
                width={200}
                height={200}
                src={img}
                alt={`happy client ${groupIndex * 4 + imgIndex + 1}`}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default CaruselCard;
