// src/App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UrlShortener } from "./components/UrlShortener";
import { ToastProvider } from "@/contexts/ToastContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ToastProvider>
          <main>
            <UrlShortener />
          </main>
        </ToastProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
