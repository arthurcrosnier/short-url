//src/components/UrlShortener/UrlResult.tsx
import { Text, Box, Button } from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { useToast } from "@/contexts/ToastContext";
import { useState } from "react";

type UrlResultProps = {
  url: string;
  title: string;
};

export function UrlResult({ url, title }: UrlResultProps) {
  const { showToast } = useToast();
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    showToast("Link copied to clipboard", "success");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  if (!url) {
    return null;
  }
  return (
    <Box
      mt="8"
      bg="accent-bg"
      borderRadius="lg"
      p="6"
      borderWidth="1px"
      borderColor="accent-border"
      transition="all 0.2s"
    >
      <Text color="on-bg" fontWeight="medium" mb="3">
        {title}
      </Text>
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        gap="4"
        alignItems="center"
      >
        <Box
          flexGrow={1}
          p="4"
          bg="bg-surface-elevated"
          borderRadius="lg"
          borderWidth="1px"
          borderColor="border-subtle"
          overflowX="auto"
          maxW="100%"
          transition="all 0.2s"
          _hover={{
            borderColor: "blue.500",
          }}
          css={{
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
            },
          }}
        >
          <Text
            color="blue.500"
            fontWeight="medium"
            display="block"
            whiteSpace="nowrap"
          >
            {url}
          </Text>
        </Box>
        <Button
          onClick={handleCopy}
          colorScheme={hasCopied ? "green" : "blue"}
          variant="outline"
          size="lg"
          flexShrink={0}
          width={{ base: "full", sm: "auto" }}
          animation={hasCopied ? "scale.105" : undefined}
          _hover={{
            transform: "translateY(-2px)",
            shadow: "md",
            bg: hasCopied ? "green.50" : "blue.50",
            _dark: {
              bg: hasCopied ? "green.900" : "blue.900",
            },
          }}
          transition="all 0.2s"
          leftIcon={hasCopied ? <CheckIcon /> : <CopyIcon />}
        >
          {hasCopied ? "Copied!" : "Copy Link"}
        </Button>
      </Box>
    </Box>
  );
}
