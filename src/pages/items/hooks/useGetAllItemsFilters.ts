import { getRouteApi } from "@tanstack/react-router";
const ItemsListRouteApi = getRouteApi("/items/");
export const useGetAllItemsFilters = () => {
  return ItemsListRouteApi.useSearch();
};
