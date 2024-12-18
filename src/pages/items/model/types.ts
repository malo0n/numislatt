import { ProductCardProps } from "@/entities/product";

export interface IAllItems {
  count: number;
  next: string;
  previous: string;
  results: ProductCardProps[];
}
