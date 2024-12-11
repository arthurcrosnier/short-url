// components/common/FormCard.tsx
import { Box } from "@chakra-ui/react";

// components/common/FormCard.tsx
export function FormCard({ children }: { children: React.ReactNode }) {
  return (
    <Box
      bg="bg-surface-elevated"
      borderRadius="xl"
      boxShadow="lg"
      p={{ base: "6", md: "8" }}
      mb="8"
      borderWidth="1px"
      borderColor="border-subtle"
      transition="all 0.2s"
      _hover={{
        boxShadow: "xl",
      }}
    >
      {children}
    </Box>
  );
}
