import { api } from "@/shared/config";
import { IItem } from "@/pages/item/model";
import { ProductCardProps } from "@/entities/product";

export const getItem = async (id: number): Promise<IItem> => {
  try {
    const itemData: IItem = await api.get(`products/${id}/`).then((res) => res.data);
    return itemData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product");
  }
};
export const getItemRecommendations = async (id: number): Promise<ProductCardProps[]> => {
  try {
    const itemRecommendations: ProductCardProps[] = await api
      .get(`products/${id}/recomendations/`)
      .then((res) => res.data);
    return itemRecommendations;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product");
  }
};
