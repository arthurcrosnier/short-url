// components/UrlShortener/ResolveForm.tsx
import { UrlInputForm } from "./UrlInputForm";
import { UrlResult } from "./UrlResult";
import { useToast } from "@/contexts/ToastContext";
import { useGetOriginalUrl } from "@/hooks/useApi";
import { FormCard } from "@/components/common/FormCard";
import { useState } from "react";

export function ResolveForm() {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const { showToast } = useToast();
  const { mutate, isPending } = useGetOriginalUrl();

  const handleSubmit = (shortCode: string) => {
    mutate(shortCode, {
      onSuccess: (response) => {
        setOriginalUrl(response.originalUrl);
        showToast("Original URL retrieved successfully", "success");
      },
      onError: (error) => showToast(error.message, "error"),
    });
  };

  return (
    <FormCard>
      <UrlInputForm
        placeholder="Enter the short code or short URL"
        buttonText="Retrieve Original URL"
        onSubmit={handleSubmit}
        isLoading={isPending}
      />
      <UrlResult url={originalUrl} title="Original URL:" />
    </FormCard>
  );
}
