import { api } from "@/shared/api"
import { ProductCardProps, ProductProps } from "../model/types"

export const getProduct = async (id: number): Promise<ProductProps> => {
  try {
    const itemData: ProductProps = await api.get(`products/${id}/`).then((res) => res.data);
    return itemData;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch product');
  }
}
export const getProductRecommendations = async (id: number): Promise<ProductCardProps[]> => {
  try {
    const itemRecommendations: ProductCardProps[] = await api.get(`products/${id}/recomendations/`).then((res) => res.data);
    return itemRecommendations;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch product');
  }
}



