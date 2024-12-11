// src/components/UrlShortener/UrlResult.tsx
import { Text, Link, Box, Button } from "@chakra-ui/react";
import { useToast } from "@/contexts/ToastContext";

type UrlResultProps = {
  url: string;
  title: string;
};

export function UrlResult({ url, title }: UrlResultProps) {
  const { showToast } = useToast();

  if (!url) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    showToast("Link copied to clipboard", "success");
  };

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
          overflowWrap="break-word"
          transition="all 0.2s"
          _hover={{
            borderColor: "blue.500",
          }}
        >
          <Link
            href={url}
            color="blue.500"
            _hover={{ color: "blue.600" }}
            fontWeight="medium"
            isExternal
          >
            {url}
          </Link>
        </Box>
        <Button
          onClick={handleCopy}
          colorScheme="blue"
          variant="outline"
          size="lg"
          width={{ base: "full", sm: "auto" }}
          _hover={{
            bg: "blue.50",
            _dark: {
              bg: "blue.900",
            },
          }}
        >
          Copy Link
        </Button>
      </Box>
    </Box>
  );
}
