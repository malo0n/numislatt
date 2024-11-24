import { AllItemsFilters } from "../model/types";

export function SearchParamsToFilters(searchParams?: AllItemsFilters): string {
  if(Object.entries(searchParams!).length === 0) return "";
  const queryParams = Object.entries(searchParams!)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

  return queryParams.length ? `${queryParams.join("&")}` : "";
}
