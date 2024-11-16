import { useQueries, UseQueryResult } from "@tanstack/react-query"
import { getProduct, getProductRecommendations } from "../api/queries"
import { useCallback } from "react"
import { ProductCardProps, ProductProps } from "../model/types"
export const useProduct = (id: number) => {
  return useQueries({
    queries: [
      {
        queryKey: ['product', id],
        queryFn: () => getProduct(id),
      },
      {
        queryKey: ['productRecommendations', id],
        queryFn: () => getProductRecommendations(id),
      }
    ],
    combine: useCallback((data: [UseQueryResult<ProductProps>, UseQueryResult<ProductCardProps[]> ]) => {
      return {
        data: {coin: data[0].data, recommendations: data[1].data},
        isLoading: data.some((item) => item.isLoading),
        isError: data.some((item) => item.isError)
      }
    }, [])
  })
}
