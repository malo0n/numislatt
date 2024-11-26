import { useQuery } from "@tanstack/react-query"
import { getCountries } from "../api/queries"



export const useGetCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => getCountries(),
  })
}