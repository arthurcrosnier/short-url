// src/App.tsx
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UrlShortener } from "@/components/UrlShortener";
import { ToastProvider } from "@/contexts/ToastContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { theme } from "@/config/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ToastProvider>
          <main>
            <UrlShortener />
            <ThemeToggle />
          </main>
        </ToastProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
