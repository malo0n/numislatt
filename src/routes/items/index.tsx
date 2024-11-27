import { ItemsList } from "@/pages";
import { AllItemsFilters } from "@/pages/items/model/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/")({
  component: ItemsList,
  validateSearch: (search: Record<string, unknown>): AllItemsFilters => {
    return {
      ...search,
    };
  },
});
