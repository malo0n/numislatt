import RootLayout from "@/app/layouts/RootLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: RootLayout,
});
