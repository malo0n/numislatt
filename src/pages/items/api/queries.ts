import { AllItemsFilters, IAllItems } from "@/pages/items/model/types";
import { api } from "@/shared/api";
import { SearchParamsToFilters } from "../helpers/searchParamsToFilters";
import { IAllCountries } from "@/shared/types/types";

export const getAllItems = async (
  { pageParam }: { pageParam?: string },
  searchParams: AllItemsFilters,
): Promise<IAllItems> => {
  try {
    const queryParams = SearchParamsToFilters(searchParams);
    const allItems: IAllItems = await api.get(`products/?${pageParam}&${queryParams}`).then((res) => res.data);
    return allItems;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product");
  }
};

export const getCountries = async (): Promise<IAllCountries[]> => {
  try {
    const countries: IAllCountries[] = await api.get(`countries/`).then((res) => res.data);
    return countries;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product");
  }
};
