"use client";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ModalContextType {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode): void => setModalContent(content);
  const hideModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalContent}
    </ModalContext.Provider>
  );
}
