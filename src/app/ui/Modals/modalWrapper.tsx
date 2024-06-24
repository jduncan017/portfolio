import { useEffect } from "react";
import type { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/src/contexts/ModalContext";
import Image from "next/image";
import useEscape from "../../../hooks/useEscape";

interface ModalWrapperProps {
  children: ReactElement;
}

const ModalWrapper: FC<ModalWrapperProps> = ({ children }) => {
  const { hideModal } = useModal();
  useEscape(hideModal);

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="modal__backdrop fixed inset-0 z-20 flex h-svh items-center justify-center bg-black/80 backdrop-blur-lg backdrop-filter xs:p-6"
      onClick={hideModal}
    >
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.2 }}
        className="modal__content shadow-customDim relative h-fit max-h-[84vh] w-fit max-w-[96vw] rounded-lg bg-slate-950 px-6 py-6 text-center xs:py-8"
        onClick={handleModalContentClick}
      >
        <button
          className="closeButton absolute right-5 top-5 z-10 transition-all hover:scale-110 hover:cursor-pointer"
          type="button"
          onClick={hideModal}
        >
          <Image
            src="/close-button.svg"
            width={16}
            height={16}
            alt="modal close button"
          />
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default ModalWrapper;
