import { ProductCardProps } from "@/shared/model";

export interface IAllItems {
  count: number;
  next: string;
  previous: string;
  results: ProductCardProps[];
}
