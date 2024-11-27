import { useNavigate } from "@tanstack/react-router";
import { AllItemsFilters } from "../model/types";

export const useSubmitFilters = () => {
  const navigate = useNavigate();
  return (data: AllItemsFilters) => {
    console.log(data);
    
    navigate({
      to: ".",
      search: {
        ...data,
        search: data.search || undefined,
        country: data.country || undefined,
        continent: data.continent ||  undefined,
        ordering: data.ordering || undefined,
        price_min: data.price_min || undefined,
        price_max: data.price_max || undefined,
        year_min: data.year_min || undefined,
        year_max: data.year_max || undefined,
      },
    });
  }
}
