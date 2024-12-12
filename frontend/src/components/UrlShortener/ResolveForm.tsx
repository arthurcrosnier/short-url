// components/ResolveForm.tsx
import { FormCard } from "@/components/common/FormCard";
import { UrlInputForm } from "./UrlInputForm";
import { UrlResult } from "./UrlResult";
import { useResolveForm } from "@/hooks/useUrlForm";

export function ResolveForm() {
  const { resultUrl, handleSubmit, isLoading } = useResolveForm();

  return (
    <FormCard>
      <UrlInputForm
        placeholder="Enter the short code or short URL"
        buttonText="Retrieve Original URL"
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <UrlResult url={resultUrl} title="Original URL:" />
    </FormCard>
  );
}
