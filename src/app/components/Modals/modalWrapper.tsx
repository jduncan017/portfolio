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
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.2 }}
        className="Content custom-scrollbar relative mb-5 mt-16 h-fit max-h-[84vh] w-fit max-w-[96vw] overflow-hidden overflow-y-scroll rounded-2xl bg-slate-950 pl-3 text-center shadow-customDim"
        onClick={handleModalContentClick}
      >
        <div className="TopBar sticky left-0 top-0 h-fit min-h-[44px] w-full bg-slate-950 py-4">
          <h2 className="Title w-full text-center text-3xl font-bold uppercase tracking-wider text-white">
            {title}
          </h2>
          <button
            className="CloseButton absolute right-4 top-6 z-10 transition-all hover:scale-110 hover:cursor-pointer"
            type="button"
            onClick={hideModal}
          >
            <Image
              src="/close-button.svg"
              width={16}
              height={16}
              alt="modal close button"
              className="CloseButton mb-3"
            />
          </button>
        </div>
        <div className="ChildContainer mb-4 rounded-xl bg-slate-950 px-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default ModalWrapper;
