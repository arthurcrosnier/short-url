export const handleApiError = async (response: Response): Promise<never> => {
  if (response.status === 429) {
    throw new Error("You are being rate limited. Try again later.");
  }

  let errorMessage = "An unknown error occurred.";

  try {
    const errorData = await response.json();
    errorMessage = errorData.message || errorMessage;
  } catch (error) {
    console.error("Failed to parse error response:", error);
  }
  throw new Error(errorMessage);
};
