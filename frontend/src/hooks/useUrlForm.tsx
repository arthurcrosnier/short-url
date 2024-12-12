// hooks/useUrlForm.ts
import { useState, useCallback } from "react";
import { UseMutationResult } from "@tanstack/react-query";
import { useToast } from "@/contexts/ToastContext";
import { ShortenResponse } from "@/types/api.types";
import { useShortenUrl, useGetOriginalUrl } from "./useApi";

type UrlFormConfig<TResponse> = {
  mutation: UseMutationResult<TResponse, Error, string>;
  successMessage: string;
  getResultUrl: (response: TResponse) => string;
};

type UrlFormResult = {
  resultUrl: string;
  handleSubmit: (url: string) => void;
  isLoading: boolean;
  reset: () => void;
};

export function useUrlForm<TResponse>({
  mutation,
  successMessage,
  getResultUrl,
}: UrlFormConfig<TResponse>): UrlFormResult {
  const [resultUrl, setResultUrl] = useState<string>("");
  const { showToast } = useToast();

  const handleSubmit = useCallback(
    (url: string) => {
      mutation.mutate(url, {
        onSuccess: (response) => {
          const url = getResultUrl(response);
          setResultUrl(url);
          showToast(successMessage, "success");
        },
        onError: (error) => {
          showToast(error.message, "error");
        },
      });
    },
    [mutation, showToast, successMessage, getResultUrl]
  );

  const reset = useCallback(() => {
    setResultUrl("");
  }, []);

  return {
    resultUrl,
    handleSubmit,
    isLoading: mutation.isPending,
    reset,
  };
}

export function useShortenForm() {
  return useUrlForm<ShortenResponse>({
    mutation: useShortenUrl(),
    successMessage: "URL shortened successfully",
    getResultUrl: (response) => response.shortUrl,
  });
}

export function useResolveForm() {
  return useUrlForm<{ originalUrl: string }>({
    mutation: useGetOriginalUrl(),
    successMessage: "Original URL retrieved successfully",
    getResultUrl: (response) => response.originalUrl,
  });
}
