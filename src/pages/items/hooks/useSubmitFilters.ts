import { useNavigate } from "@tanstack/react-router";
import { AllItemsFilters } from "../model/types";

export const useSubmitFilters = () => {
  const navigate = useNavigate();
  return (data: AllItemsFilters) => {
    navigate({
      to: ".",
      search: {
        search: data.search || undefined,
        country: data.country || undefined,
        continent: data.continent ||  undefined,
        ordering: data.ordering || undefined,
        price_min: data.price_min!==0 ? data.price_min : undefined,
        price_max: data.price_max!==200 ? data.price_max : undefined,
        year_min: data.year_min!==1800 ? data.year_min : undefined,
        year_max: data.year_max!==2023 ? data.year_max : undefined,
        grade: data.grade || undefined
      },
    });
  }
}
