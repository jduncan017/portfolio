import { motion } from "framer-motion";
import SiteButton from "../UI-Elements/SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import BrandModal from "../Modals/BrandModal";
import ContactModal from "../Modals/contactModal";

export default function Services() {
  const { showModal } = useModal();

  const leftContainerVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        ease: "easeInOut",
        type: "tween",
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.4,
        delay: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="ServicesContainer w-full justify-end rounded-r-xl border-t border-white/30 bg-black/50 shadow-secondaryDim min-[382px]:pl-[calc((100vw-375px-32px)/2)] xs:rounded-xl xs:pl-0 sm:border-l lg:flex xxl:rounded-xl"
      variants={leftContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="InnerContainer h-fit w-full max-w-[500px] flex-col gap-8 self-end rounded-r-xl py-6 pl-8 pr-4 mini:pl-4 xs:px-8 lg:gap-16 xxl:w-fit">
        <motion.h2
          className="ServicesTitle text-gradient-clip mb-1 flex gap-2 font-sans text-2xl uppercase leading-normal tracking-widest text-white sm:text-3xl"
          variants={itemVariants}
        >
          Services
        </motion.h2>
        <motion.p
          className="ServicesDescription mb-3 max-w-[375px] border-b border-dotted border-gray-600 pb-3 text-sm uppercase text-gray-400 xs:max-w-[600px]"
          variants={itemVariants}
        >
          In Need of Branding or Web Development services?
        </motion.p>
        <motion.p
          className="ServicesDescription max-w-[375px] leading-6 text-gray-200 xs:max-w-[600px] "
          variants={itemVariants}
        >
          See examples of client sites in the projects section. Brand Strategy
          example below.
        </motion.p>
        <motion.div
          className="ButtonContainer mb-2 mr-5 mt-6 flex flex-col gap-4 mini:mr-0 mini:flex-row"
          variants={itemVariants}
        >
          <SiteButton
            size="large"
            textColor="text-black"
            style="silver"
            onClick={() => showModal(<BrandModal />)}
          >
            Example Brand Guide
          </SiteButton>
          <SiteButton
            size="large"
            textColor="text-gray-200"
            style="silverHollow"
            onClick={() => showModal(<ContactModal />)}
          >
            Inquire
          </SiteButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
