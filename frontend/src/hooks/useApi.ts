// src/hooks/useApi.ts
import { useMutation } from "@tanstack/react-query";
import type { ShortenResponse } from "../types/api.types";

export const useShortenUrl = () => {
  return useMutation({
    mutationFn: async (url: string) => {
      const response = await fetch("http://localhost:3000/shortener", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: url }),
      });
      if (!response.ok) throw new Error("Failed to shorten URL");
      return response.json() as Promise<ShortenResponse>;
    },
  });
};
