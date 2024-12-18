import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "@/app/layouts/RootLayout";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ScrollToTop } from "@/shared/lib";

export const Route = createRootRoute({
  component: () => (
    <>
      <RootLayout />
      <ScrollToTop />
      <TanStackRouterDevtools />
    </>
  ),
});
