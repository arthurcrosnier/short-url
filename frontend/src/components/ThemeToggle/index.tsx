// src/components/ThemeToggle/index.tsx
import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      position="fixed"
      bottom="4"
      right="4"
      borderRadius="full"
      width="40px"
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      _hover={{
        bg: colorMode === "light" ? "gray.300" : "gray.600",
      }}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

// src/theme.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme({ config });
