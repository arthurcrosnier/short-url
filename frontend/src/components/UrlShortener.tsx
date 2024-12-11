// src/components/UrlShortener.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  useToast,
  Link,
} from "@chakra-ui/react";
import { useShortenUrl } from "../hooks/useApi";

interface FormInputs {
  url: string;
}

export function UrlShortener() {
  const [shortUrl, setShortUrl] = useState<string>("");
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const { mutate: shortenUrl, isPending } = useShortenUrl();

  const onSubmit = (data: FormInputs) => {
    shortenUrl(data.url, {
      onSuccess: (response) => {
        setShortUrl(response.shortUrl);
        toast({
          title: "URL shortened successfully",
          status: "success",
          duration: 3000,
        });
      },
      onError: () => {
        toast({
          title: "Failed to shorten URL",
          status: "error",
          duration: 3000,
        });
      },
    });
  };

  return (
    <Box className="max-w-xl mx-auto p-6 space-y-6">
      <Text className="text-2xl font-bold text-center mb-8">URL Shortener</Text>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <VStack spacing={4}>
          <Input
            {...register("url", {
              required: "URL is required",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Must be a valid URL",
              },
            })}
            placeholder="Enter your URL here"
            size="lg"
          />
          {errors.url && <Text color="red.500">{errors.url.message}</Text>}

          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isPending}
            className="w-full"
          >
            Shorten URL
          </Button>
        </VStack>
      </form>

      {shortUrl && (
        <Box className="mt-6 p-4 bg-gray-50 rounded-lg">
          <Text className="font-semibold mb-2">Your shortened URL:</Text>
          <Link href={shortUrl} className="text-blue-600 break-all" isExternal>
            {shortUrl}
          </Link>
        </Box>
      )}
    </Box>
  );
}
