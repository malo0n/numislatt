import { continents, countries, fullContinents, grades, IAllCountries } from "./types";

export interface buttonProps {
  text?: string;
  type?: "primary" | "secondary";
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
  };
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
  names: ["year_min", "year_max"] | ["price_min", "price_max"];
}

export interface checkboxProps<T extends continents | countries | grades> {
  value: T;
  isChecked: boolean;
  text: string;
  name: "continent" | "country" | "grade";
}

export interface FilterComponentProps {
  countries: IAllCountries[];
}

export interface RadioButtonProps {
  value: "price" | "-price" | "default";
  name: "ordering";
  label: string;
}
