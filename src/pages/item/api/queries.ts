import { api } from "@/shared/api"
import { ProductCardProps } from "@/pages/items/model/types";
import { ItemProps } from "@/pages/item/model/types";

export const getItem = async (id: number): Promise<ItemProps> => {
  try {
    const itemData: ItemProps = await api.get(`products/${id}/`).then((res) => res.data);
    return itemData;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch product');
  }
}
export const getItemRecommendations = async (id: number): Promise<ProductCardProps[]> => {
  try {
    const itemRecommendations: ProductCardProps[] = await api.get(`products/${id}/recomendations/`).then((res) => res.data);
    return itemRecommendations;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch product');
  }
}



