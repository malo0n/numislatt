import { AllItemsFilters } from "@/shared/model";

export function searchParamsToFilters(searchParams?: AllItemsFilters): string {
  if (Object.entries(searchParams!).length === 0) return "";
  const queryParams = Object.entries(searchParams!).flatMap(([key, value]) => {
    if (Array.isArray(value)) {
      return value.map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`);
    }

    return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
  });

  return queryParams.length ? `${queryParams.join("&")}` : "";
}
