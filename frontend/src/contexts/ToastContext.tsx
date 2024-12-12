// src/contexts/ToastContext.tsx
import { createContext, useContext } from "react";
import { useToast as useChakraToast } from "@chakra-ui/react";

type ToastType = "success" | "error" | "info" | "warning";

type ToastContextType = {
  showToast: (title: string, type: ToastType) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = useChakraToast();

  const showToast = (title: string, type: ToastType) => {
    toast({
      title,
      status: type,
      duration: 1500,
      isClosable: true,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
