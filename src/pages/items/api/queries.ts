import { ProductCardProps } from "@/pages/items/model/types";
import { api } from "@/shared/api";
import { SearchParamsToFilters } from "../helpers/searchParamsToFilters";



export const getAllItems = async (props: URLSearchParams): Promise<ProductCardProps[]> => {
  try {
    const queryParams = SearchParamsToFilters(props)
    const allItems: ProductCardProps[] = await api.get(`products/${queryParams}`).then((res) => res.data);
    return allItems;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch product');
  }
}

