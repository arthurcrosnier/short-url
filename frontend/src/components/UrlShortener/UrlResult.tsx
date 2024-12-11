// src/components/UrlShortener/UrlResult.tsx
import { Text, Link, Box, Button } from "@chakra-ui/react";
import { useToast } from "@/contexts/ToastContext";

export function UrlResult(props: { shortUrl: string }) {
  const { showToast } = useToast();
  if (!props.shortUrl) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortUrl);
    showToast("Link copied to clipboard", "success");
  };

  return (
    <Box
      mt="8"
      bg="primary.50"
      borderRadius="lg"
      p="6"
      borderWidth="1px"
      borderColor="primary.100"
    >
      <Text color="on-bg-muted" fontWeight="medium" mb="3">
        Your shortened URL:
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
          bg="bg-surface"
          borderRadius="lg"
          borderWidth="1px"
          borderColor="border-default"
          overflowWrap="break-word"
        >
          <Link
            href={props.shortUrl}
            color="primary.600"
            _hover={{ color: "primary.800" }}
            fontWeight="medium"
            isExternal
          >
            {props.shortUrl}
          </Link>
        </Box>
        <Button
          onClick={handleCopy}
          colorScheme="blue"
          variant="outline"
          size="lg"
          width={{ base: "full", sm: "auto" }}
        >
          Copy Link
        </Button>
      </Box>
    </Box>
  );
}
