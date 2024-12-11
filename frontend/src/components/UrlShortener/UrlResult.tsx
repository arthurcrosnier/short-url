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
    <Box className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
      <Text className="text-gray-700 font-medium mb-3">
        Your shortened URL:
      </Text>
      <Box className="flex flex-col sm:flex-row gap-4 items-center">
        <Box className="flex-grow p-4 bg-white rounded-lg border border-gray-200 break-all">
          <Link
            href={props.shortUrl}
            className="text-blue-600 hover:text-blue-800 font-medium"
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
          className="w-full sm:w-auto"
        >
          Copy Link
        </Button>
      </Box>
    </Box>
  );
}
