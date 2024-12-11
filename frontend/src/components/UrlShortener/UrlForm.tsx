import { Input, Button, VStack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormInputs } from "@/types/urlShortener.type";

type UrlFormProps = {
  onSubmit: (data: FormInputs) => void;
  isLoading: boolean;
};

export function UrlForm({ onSubmit, isLoading }: UrlFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <Input
          {...register("url", {
            required: "URL is required",
            pattern: {
              value: /^https?:\/\/.+/,
              message: "Must be a valid URL",
            },
          })}
          placeholder="Paste your long URL here"
          size="lg"
          bg="gray.50"
          _hover={{ bg: "gray.100" }}
          _focus={{ bg: "white" }}
        />
        {errors.url && (
          <Text color="red.500" fontSize="sm" width="100%">
            {errors.url.message}
          </Text>
        )}
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isLoading}
          size="lg"
          width="100%"
          className="hover:bg-blue-700 transition-colors"
        >
          Shorten
        </Button>
      </VStack>
    </form>
  );
}
