import { useInfiniteQuery } from "@tanstack/react-query"
import { getAllItems } from "../api/queries"
import { AllItemsFilters } from "../model/types"
import { pageLimit } from "@/shared/model/const"



export const useGetInfiniteItems = (searchParams: AllItemsFilters) => {
  return useInfiniteQuery({
    queryKey: ['items'],
    queryFn: (pageParam) => getAllItems(pageParam, searchParams),
    initialPageParam: `offset=0&limit=${pageLimit}`,
    getNextPageParam: (lastPage) => {
      return lastPage.next.replace('https://numislat.onrender.com/api/products/?', '')
    },
    
  })
}