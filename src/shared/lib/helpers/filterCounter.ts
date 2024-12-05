import { AllItemsFilters } from "@/pages/items/model/types";

export const filterCounter = (data: AllItemsFilters) => {
  let counter = 0;
  for (const key in data) {
    if (key === "continent" && data.continent) {
      counter += data.continent.length;
    }
    if (key === "grade" && data.grade) {
      counter += data.grade.length;
    }
    if (key === "country" && data.country) {
      counter += data.country.length;
    }
    if (key === "price_min" || key === "price_max") {
      counter += 1;
    }
    if (key === "year_min" || key === "year_max") {
      counter += 1;
    }
  }
  return counter === 0 ? "" : counter;
};
