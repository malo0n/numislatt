import { useQueries, UseQueryResult } from "@tanstack/react-query"
import { getItem, getItemRecommendations } from "../api/queries"
import { useCallback } from "react"
import { IItem } from "../model/types"
import { IProductCard } from "@/shared/model/types"
export const useProduct = (id: number) => {
  return useQueries({
    queries: [
      {
        queryKey: ['product', id],
        queryFn: () => getItem(id),
      },
      {
        queryKey: ['productRecommendations', id],
        queryFn: () => getItemRecommendations(id),
      }
    ],
    combine: useCallback((data: [UseQueryResult<IItem>, UseQueryResult<IProductCard[]> ]) => {
      return {
        data: {coin: data[0].data, recommendations: data[1].data},
        isLoading: data.some((item) => item.isLoading),
        isError: data.some((item) => item.isError)
      }
    }, [])
  })
}
