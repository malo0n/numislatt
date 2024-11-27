import { useInfiniteQuery } from "@tanstack/react-query"
import { getAllItems } from "../api/queries"
import { AllItemsFilters } from "../model/types"
import { pageLimit } from "@/shared/model/const"
import { baseUrl } from "@/shared/config"



export const useGetInfiniteItems = (searchParams: AllItemsFilters) => {
  return useInfiniteQuery({
    queryKey: ['items', searchParams],
    queryFn: (pageParam) => getAllItems(pageParam, searchParams),
    initialPageParam: `offset=0&limit=${pageLimit}`,
    getNextPageParam: (lastPage) => {
      return lastPage.next ? lastPage.next.replace(`${baseUrl}products/?`, '') : null
    },
    getPreviousPageParam: (lastPage) => {
      return lastPage.previous ? lastPage.previous.replace(`${baseUrl}products/?`, '') : null
    },
    maxPages: 3,
    
  })
}