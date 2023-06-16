import Image from 'next/image';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface SliderGalleryProps {
  images: string[];
}

const SliderGallery: FC<SliderGalleryProps> = ({ images }) => {
  return (
    <div className="mx-auto w-full lg:w-2/3">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        interval={2000}
        showIndicators={true}
        centerMode={true}
        centerSlidePercentage={100}
      >
        {images.map((image, index) => (
          <div key={index} className="h-[500px] w-full">
            <Image
              width={800}
              height={800}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderGallery;
