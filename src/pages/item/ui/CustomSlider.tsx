import { useState } from "react";
import rightSliderArrow from "@/shared/image/icons/rightSliderArrow.svg";
import leftSliderArrow from "@/shared/image/icons/leftSliderArrow.svg";
import { CarouselIndicatorsProps, CustomSliderProps } from "../model/types";

const CarouselIndicators = (props: CarouselIndicatorsProps) => {
  const { images, activeIndex, onClick } = props;
  return (
    <div className='flex w-fit gap-2 rounded-full bg-tetriaryBlack px-4 py-1'>
      {images.map((_, index) => (
        <button
          key={index}
          className={`h-3 w-3 rounded-full bg-mainBlack ${index === activeIndex ? "opacity-100" : ""} opacity-[0.08] transition-all`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export const CustomSlider = (props: CustomSliderProps) => {
  const { children: images } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='flex flex-col items-center gap-7'>
      <div className='flex overflow-hidden'>
        <button onClick={prevSlide} className=''>
          <img className='w-11 transition-all hover:opacity-60' src={leftSliderArrow} alt='' />
        </button>

        <div className='relative mx-8 h-[450px] w-[450px] overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className='h-fit self-center'
                src={image}
                alt=''
              />
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className=''>
          <img className='w-11 transition-all hover:opacity-60' src={rightSliderArrow} alt='' />
        </button>
      </div>

      <CarouselIndicators images={images} activeIndex={activeIndex} onClick={goToSlide} />
    </div>
  );
};
