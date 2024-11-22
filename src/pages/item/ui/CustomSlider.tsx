import { useState } from "react";
import rightSliderArrow from "@/shared/image/icons/rightSliderArrow.svg";
import leftSliderArrow from "@/shared/image/icons/leftSliderArrow.svg";
import { CarouselIndicatorsProps, CustomSliderProps } from "../model/types";

const CarouselIndicators = (props: CarouselIndicatorsProps) => {
  const { images, activeIndex, onClick } = props;
  return (
    <div className='flex w-fit gap-2 rounded-full bg-tetriaryBlack px-[5px] py-[3px] lg:px-4 lg:py-1'>
      {images.map((_, index) => (
        <button
          key={index}
          className={`size-2 lg:size-3 rounded-full bg-mainBlack ${
            index === activeIndex ? "opacity-100" : "opacity-[0.08]"
          } transition-all`}
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
    <div className='flex flex-col items-center gap-7 bg-[#fff] p-1 lg:p-[10px] rounded-xl lg:rounded-[20px]'>
      <div className='flex overflow-hidden'>
        <button onClick={prevSlide} className=''>
          <img className='min-w-6 w-6 lg:w-11 lg:min-w-11 transition-all hover:opacity-60' src={leftSliderArrow} alt='' />
        </button>

        <div className='relative mx-8 lg:h-[450px] w-fit lg:w-[450px] overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="min-w-full min-h-full flex items-center justify-center">
                <img
                  key={index}
                  className='w-fit'
                  src={image}
                  alt=''
                />
              </div>
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className=''>
          <img className='min-w-6 w-6 lg:w-11 lg:min-w-11  transition-all hover:opacity-60' src={rightSliderArrow} alt='' />
        </button>
      </div>

      <CarouselIndicators images={images} activeIndex={activeIndex} onClick={goToSlide} />
    </div>
  );
};

