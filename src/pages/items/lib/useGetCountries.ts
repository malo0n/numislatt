import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@/pages/items/api/queries";

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
    staleTime: Infinity,
  });
};
