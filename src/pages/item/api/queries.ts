import { api } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { ProductCardProps, ProductProps } from "../model/types"

const getProduct = async (id: number): Promise<ProductProps> => {
  try {
    const itemData: ProductProps = await api.get(`products/${id}/`).then((res) => res.data);
    const itemRecomendations: ProductCardProps[] = await api.get(`products/${id}/recomendations/`).then((res) => res.data);
    return { ...itemData, recommendations: itemRecomendations };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch product');
  }
}
export const useProduct = (id: number) => {
  return useQuery<ProductProps>({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
    refetchOnWindowFocus: false 
  })
}
