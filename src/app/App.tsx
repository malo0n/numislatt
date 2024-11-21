import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Loader } from "@/shared/ui";
import { ScrollToTop } from "@/shared/helpers/ScrollToTop";
import { LazyMotion, domMax } from "motion/react";

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        {/* <AuthProvider> */}
          <LazyMotion features={domMax}>
              <ScrollToTop />
          </LazyMotion>
        {/* </AuthProvider> */}
        {/* <ToastContainer /> */}
      </Suspense>
    </QueryClientProvider>
  );
}
