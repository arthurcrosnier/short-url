// src/config/theme.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      "bg-surface": {
        default: "gray.50",
        _dark: "gray.900",
      },
      "bg-surface-elevated": {
        default: "white",
        _dark: "gray.800",
      },
      "on-bg": {
        default: "gray.900",
        _dark: "white",
      },
      "on-bg-muted": {
        default: "gray.600",
        _dark: "gray.400",
      },
      "input-bg": {
        default: "white",
        _dark: "gray.700",
      },
      "border-subtle": {
        default: "gray.200",
        _dark: "gray.700",
      },
      "accent-bg": {
        default: "blue.50",
        _dark: "blue.900",
      },
      "accent-border": {
        default: "blue.100",
        _dark: "blue.800",
      },
    },
  },
});
