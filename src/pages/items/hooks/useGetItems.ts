import { useQuery } from "@tanstack/react-query"
import { getAllItems } from "../api/queries"



export const useGetItems = (props: URLSearchParams) => {
  return useQuery({
    queryKey: ['items'],
    queryFn: () => getAllItems(props),
  })
}