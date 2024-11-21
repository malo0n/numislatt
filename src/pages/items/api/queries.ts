import { IAllItems } from "@/pages/items/model/types";
import { api } from "@/shared/api";
// import { SearchParamsToFilters } from "../helpers/searchParamsToFilters";



export const getAllItems = async (): Promise<IAllItems> => {
  try {
    // const queryParams = SearchParamsToFilters()
    const allItems: IAllItems = await api.get(`products/`).then((res) => res.data);    
    return allItems;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch product');
  }
}

