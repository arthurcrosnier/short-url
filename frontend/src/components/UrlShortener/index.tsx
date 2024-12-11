// components/UrlShortener/index.tsx
import { Box } from "@chakra-ui/react";
import { PageHeader } from "@/components/common/PageHeader";
import { ShortenForm } from "./ShortenForm";
import { ResolveForm } from "./ResolveForm";

export function UrlShortener() {
  return (
    <Box bg="bg-surface" minH="100vh">
      <Box maxW="4xl" mx="auto" px={{ base: "4", md: "6", lg: "8" }} py="12">
        <PageHeader />
        <ShortenForm />
        <ResolveForm />
      </Box>
    </Box>
  );
}
