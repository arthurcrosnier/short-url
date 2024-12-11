import { useMutation } from "@tanstack/react-query";
import { handleApiError } from "@/utils/api";
import type { ShortenResponse } from "../types/api.types";

export const useShortenUrl = () => {
  return useMutation({
    mutationFn: async (url: string) => {
      const response = await fetch("http://localhost:3000/s", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: url }),
      });

      if (!response.ok) {
        await handleApiError(response);
      }

      return response.json() as Promise<ShortenResponse>;
    },
  });
};

export const useGetOriginalUrl = () => {
  return useMutation({
    mutationFn: async (shortCodeOrUrl: string) => {
      const shortCode = shortCodeOrUrl.split("/").pop() || "";
      const response = await fetch(
        `http://localhost:3000/s/find/${shortCode}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        await handleApiError(response);
      }

      return response.json() as Promise<{ originalUrl: string }>;
    },
  });
};
