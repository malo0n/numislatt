import { countries, fullContinents } from "./types";

export interface buttonProps {
  text?: string;
  type?: 'primary' | 'secondary';
  icon?: string;
  className?: string;
  onClick?: () => void;
}

export interface ProductCardProps {
  readonly id: number;
  name: string;
  image: {
    image: string;
    display_order: number;
  }
  grade: {
    code: string;
    name: string;
  };
  country: {
    iso: countries;
    name: string;
    continent: fullContinents;
  };
  year: number;
  price: number;
  quantity: number;
}

export interface FadeComponentProps {
  className?: string;
  initial?: string;
  animate?: string;
  transition?: string;
  exit?: string;
  children: React.ReactNode;
}


export interface SliderFilterProps {
  minValue: number;
  maxValue: number;
  step: number;
  names: ['year_min', 'year_max'] | ['price_min', 'price_max'];
}