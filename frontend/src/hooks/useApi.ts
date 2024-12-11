// src/hooks/useApi.ts
import { useMutation } from "@tanstack/react-query";
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
        if (response.status === 429) {
          throw new Error("You are being rate limited. Try again later.");
        } else {
          const errorData = await response.json();
          console.log(errorData);
          throw new Error(errorData.message || "Failed to shorten URL");
        }
      }

      return response.json() as Promise<ShortenResponse>;
    },
  });
};
