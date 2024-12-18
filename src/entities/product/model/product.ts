import { countriesType, fullContinentsType } from "@/shared/model";

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
    iso: countriesType;
    name: string;
    continent: fullContinentsType;
  };
  year: number;
  price: number;
  quantity: number;
}
