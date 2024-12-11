// src/components/UrlShortener/index.tsx
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useShortenUrl } from "@/hooks/useApi";
import { UrlForm } from "./UrlForm";
import { useToast } from "@/contexts/ToastContext";
import { UrlResult } from "./UrlResult";
import { FormInputs } from "@/types/urlShortener.type";

export function UrlShortener() {
  const [shortUrl, setShortUrl] = useState<string>("");
  const { showToast } = useToast();
  const { mutate: shortenUrl, isPending } = useShortenUrl();

  const onSubmit = (data: FormInputs) => {
    shortenUrl(data.url, {
      onSuccess: (response) => {
        setShortUrl(response.shortUrl);
        showToast("URL shortened successfully", "success");
      },
      onError: (error) => {
        showToast(error.message, "error");
      },
    });
  };

  return (
    <Box bg="bg-surface" minH="100vh">
      <Box maxW="4xl" mx="auto" px={{ base: "4", md: "6", lg: "8" }} py="12">
        <Text
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mb="4"
          color="on-bg"
        >
          Short
          <Text as="span" color="primary.500">
            URL
          </Text>
        </Text>
        <Text fontSize="lg" textAlign="center" mb="12" color="on-bg-muted">
          Transform your long URLs into short, memorable links
        </Text>

        <Box
          bg="bg-surface-elevated"
          borderRadius="xl"
          boxShadow="lg"
          p={{ base: "6", md: "8" }}
        >
          <UrlForm onSubmit={onSubmit} isLoading={isPending} />
          <UrlResult shortUrl={shortUrl} />
        </Box>
      </Box>
    </Box>
  );
}
