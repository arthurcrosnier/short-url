// components/common/PageHeader.tsx
import { Text } from "@chakra-ui/react";

export function PageHeader() {
  return (
    <>
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        textAlign="center"
        mb="4"
        color="on-bg"
      >
        Short
        <Text as="span" color="blue.500">
          URL
        </Text>
      </Text>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        textAlign="center"
        mb="12"
        color="on-bg-muted"
      >
        Transform your long URLs into short, memorable links
      </Text>
    </>
  );
}
