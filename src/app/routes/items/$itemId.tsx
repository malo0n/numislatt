import { Item } from "@/pages/item";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId")({
  component: Item,
});
