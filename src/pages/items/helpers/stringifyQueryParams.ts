import { AllItemsFilters } from "../model/types";

export function stringifyQueryParams(filters: AllItemsFilters): string {
  const queryParams = Object.entries(filters)
    .filter(([, value]) => value !== undefined && value !== null)
    .flatMap(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    });

  return queryParams.length ? `?${queryParams.join("&")}` : "";
}
