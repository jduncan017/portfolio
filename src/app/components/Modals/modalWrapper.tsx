import { useEffect } from "react";
import type { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/src/contexts/ModalContext";
import Image from "next/image";
import useEscape from "../../../hooks/useEscape";

interface ModalWrapperProps {
  title?: string;
  children: ReactElement;
}

const ModalWrapper: FC<ModalWrapperProps> = ({ title, children }) => {
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
      className="ModalOverlay fixed inset-0 z-20 flex h-svh items-center justify-center bg-black/80 backdrop-blur-lg backdrop-filter xs:p-6"
      onClick={hideModal}
    >
      <h2 className="Title absolute top-[3%] text-center text-3xl font-bold uppercase tracking-wider text-white">
        {title}
      </h2>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.2 }}
        className="Conten custom-scrollbar relative mb-5 mt-16 h-fit max-h-[84vh] w-fit max-w-[96vw] overflow-hidden overflow-y-scroll rounded-2xl bg-slate-950 px-6 py-6 text-center shadow-customDim xs:py-8"
        onClick={handleModalContentClick}
      >
        <button
          className="CloseButton absolute right-5 top-5 z-10 transition-all hover:scale-110 hover:cursor-pointer"
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
