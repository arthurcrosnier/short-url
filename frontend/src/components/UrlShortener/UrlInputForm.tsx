// src/components/UrlShortener/UrlInputForm.tsx
import { Input, Button, VStack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { isUrl } from "@/utils/validators";

type UrlInputFormProps = {
  placeholder: string;
  buttonText: string;
  onSubmit: (inputValue: string) => void;
  isLoading: boolean;
  shouldValidateUrl?: boolean;
};

export function UrlInputForm({
  placeholder,
  buttonText,
  onSubmit,
  isLoading,
  shouldValidateUrl = false,
}: UrlInputFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ urlInput: string }>();

  const handleFormSubmit = (data: { urlInput: string }) => {
    const value = data.urlInput.startsWith("http")
      ? data.urlInput
      : `https://${data.urlInput}`;
    onSubmit(value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack spacing={4}>
        <Input
          {...register("urlInput", {
            required: "This field is required",
            validate: shouldValidateUrl
              ? (value) => isUrl(value) || "Please enter a valid URL"
              : undefined,
          })}
          placeholder={placeholder}
          size="lg"
          bg="input-bg"
          _hover={{ bg: "input-bg" }}
          _focus={{ bg: "input-bg", borderColor: "blue.500" }}
          borderColor="gray.200"
          _dark={{
            borderColor: "gray.600",
          }}
        />
        {errors.urlInput && (
          <Text color="red.500" fontSize="sm" width="100%">
            {errors.urlInput.message}
          </Text>
        )}
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isLoading}
          size="lg"
          width="100%"
        >
          {buttonText}
        </Button>
      </VStack>
    </form>
  );
}
