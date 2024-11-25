import { continents, countries, grades, IProductCard } from "@/shared/model/types";

export interface IAllItems {
  count: number;
  next: string;
  previous: string;
  results: IProductCard[]
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
