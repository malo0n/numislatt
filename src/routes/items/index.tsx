import { ItemsList } from "@/pages/items";
import { AllItemsFilters } from "@/shared/model";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/")({
  component: ItemsList,
  validateSearch: (search: Record<string, unknown>): AllItemsFilters => {
    return {
      ...search,
    };
  },
});
