export interface CarouselIndicatorsProps {
  images: string[];
  activeIndex: number;
  onClick: (index: number) => void;
}

export interface CustomSliderProps {
  children: string[];
}

export interface ItemProps {
  id: number;
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
    iso: string;
    name: string;
    continent: "Europe";
  };
  year: number;
  price: number;
  quantity: number;
}
