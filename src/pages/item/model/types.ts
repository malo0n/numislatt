import { countriesType, continentsType } from "@/shared/model";

export interface CarouselIndicatorsProps {
  images: string[];
  activeIndex: number;
  onClick: (index: number) => void;
}

export interface CustomSliderProps {
  children: string[];
}

export interface IItem {
  readonly id: number;
  name: string;
  description: string;
  images: [
    {
      image: string;
      display_order: number;
    },
  ];
  grade: {
    code: string;
    name: string;
  };
  country: {
    iso: countriesType;
    name: string;
    continent: continentsType;
  };
  year: number;
  price: number;
  quantity: number;
}
