import { useQueries, UseQueryResult } from "@tanstack/react-query"
import { getItem, getItemRecommendations } from "../api/queries"
import { useCallback } from "react"
import { ProductCardProps, ItemProps } from "../model/types"
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
    combine: useCallback((data: [UseQueryResult<ItemProps>, UseQueryResult<ProductCardProps[]> ]) => {
      return {
        data: {coin: data[0].data, recommendations: data[1].data},
        isLoading: data.some((item) => item.isLoading),
        isError: data.some((item) => item.isError)
      }
    }, [])
  })
}
