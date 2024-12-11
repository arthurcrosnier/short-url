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
      onError: () => {
        showToast("Failed to shorten URL", "error");
      },
    });
  };

  return (
    <Box className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Box className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Text className="text-4xl font-bold text-center text-gray-900 mb-4">
          Short<span className="text-blue-600">URL</span>
        </Text>
        <Text className="text-center text-gray-600 mb-12 text-lg">
          Transform your long URLs into short, memorable links
        </Text>

        <Box className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <UrlForm onSubmit={onSubmit} isLoading={isPending} />
          <UrlResult shortUrl={shortUrl} />
        </Box>
      </Box>
    </Box>
  );
}
