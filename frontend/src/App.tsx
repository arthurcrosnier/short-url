// src/App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UrlShortener } from "./components/UrlShortener";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <main className="min-h-screen bg-gray-50 py-12">
          <UrlShortener />
        </main>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
