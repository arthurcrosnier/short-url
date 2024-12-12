// components/ShortenForm.tsx
import { FormCard } from "@/components/common/FormCard";
import { UrlInputForm } from "./UrlInputForm";
import { UrlResult } from "./UrlResult";
import { useShortenForm } from "@/hooks/useUrlForm";

export function ShortenForm() {
  const { resultUrl, handleSubmit, isLoading } = useShortenForm();

  return (
    <FormCard>
      <UrlInputForm
        placeholder="Paste your long URL here"
        buttonText="Shorten URL"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        shouldValidateUrl={true}
      />
      <UrlResult url={resultUrl} title="Your shortened URL:" />
    </FormCard>
  );
}
