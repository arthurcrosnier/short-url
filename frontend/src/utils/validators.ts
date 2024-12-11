// src/utils/validators.ts
export const isUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url.startsWith("http") ? url : `https://${url}`);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
};
