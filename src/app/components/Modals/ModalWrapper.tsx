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
      className="ModalOverlay fixed inset-0 z-50 flex h-svh items-center justify-center bg-black/70 backdrop-blur-lg backdrop-filter xs:p-6"
      onClick={hideModal}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="Content custom-scrollbar relative h-fit max-h-[96vh] w-fit max-w-[96vw] overflow-hidden overflow-y-scroll rounded-xl border border-white/20 bg-slate-950 text-center xs:pl-3"
        onClick={handleModalContentClick}
      >
        <div
          className={`TopBar ${title && "min-h-[44px] pt-10"} sticky left-0 top-0 z-10 h-fit w-full bg-gradient-to-b from-slate-950 from-70% to-transparent to-100% pb-8`}
        >
          <h2 className="Title text-gradient-clip w-full text-center font-sans text-3xl font-bold uppercase tracking-wider">
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
        <div className="ChildContainer rounded-xl bg-slate-950 px-6">
          {children}
        </div>
        <div className="BottomBar sticky -bottom-1 left-0 h-10 w-full bg-gradient-to-t from-slate-950 from-70% to-transparent to-100%" />
      </motion.div>
    </div>
  );
};

export default ModalWrapper;
