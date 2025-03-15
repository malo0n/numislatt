import { useSuspenseQuery } from "@tanstack/react-query";
import { getCountries } from "@/pages/items/api/queries";

export const useGetCountries = () => {
  return useSuspenseQuery({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
    staleTime: Infinity,
  });
};
