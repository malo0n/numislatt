import { createRootRoute } from '@tanstack/react-router'
import RootLayout from '@/shared/ui/layouts/RootLayout';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ScrollToTop } from '@/shared/helpers/ScrollToTop';

export const Route = createRootRoute({
  component: () => (
    <>
      <RootLayout/>
      <ScrollToTop/>
      <TanStackRouterDevtools />
    </>
  ),
});