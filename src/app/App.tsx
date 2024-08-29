import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routing } from "../pages";

export function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
  );
}
