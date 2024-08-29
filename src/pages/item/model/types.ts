export interface CarouselIndicatorsProps {
  images: string[];
  activeIndex: number;
  onClick: (index: number) => void;
}

export interface CustomSliderProps {
  children: string[];
}

export interface ProductProps {
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
  recommendations: ProductCardProps[];
}

export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
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
