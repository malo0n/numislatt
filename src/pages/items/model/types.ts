import { ProductCardProps } from "@/shared/model";
import { continents, countries, grades } from "@/shared/types/types";

export interface IAllItems {
  count: number;
  next: string;
  previous: string;
  results: ProductCardProps[]
}

export interface AllItemsFilters {
  continent?: continents;
  country?: countries;
  grade?: grades;
  limit?: number;
  offset?: number;
  ordering?: 'price' | '-price';
  price_max?: number;
  price_min?: number;
  search?: string;
  year_max?: number;
  year_min?: number;
}
