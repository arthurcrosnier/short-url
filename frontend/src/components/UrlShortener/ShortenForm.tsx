// components/UrlShortener/ShortenForm.tsx
import { UrlInputForm } from "./UrlInputForm";
import { UrlResult } from "./UrlResult";
import { useToast } from "@/contexts/ToastContext";
import { useShortenUrl } from "@/hooks/useApi";
import { FormCard } from "@/components/common/FormCard";
import { useState } from "react";

export function ShortenForm() {
  const [shortUrl, setShortUrl] = useState<string>("");
  const { showToast } = useToast();
  const { mutate, isPending } = useShortenUrl();

  const handleSubmit = (url: string) => {
    mutate(url, {
      onSuccess: (response) => {
        setShortUrl(response.shortUrl);
        showToast("URL shortened successfully", "success");
      },
      onError: (error) => showToast(error.message, "error"),
    });
  };

  return (
    <FormCard>
      <UrlInputForm
        placeholder="Paste your long URL here"
        buttonText="Shorten URL"
        onSubmit={handleSubmit}
        isLoading={isPending}
      />
      <UrlResult url={shortUrl} title="Your shortened URL:" />
    </FormCard>
  );
}
