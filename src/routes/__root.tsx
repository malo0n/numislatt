import { createRootRoute } from '@tanstack/react-router'
import RootLayout from '@/pages/RootLayout';
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