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
        delay: 0.8,
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
      className="ServicesContainer w-full justify-end rounded-r-xl bg-black/90 shadow-secondaryBright min-[382px]:pl-[calc((100vw-350px-32px)/2)] xs:rounded-xl xs:pl-0 lg:flex lg:rounded-l-none xxl:rounded-xl"
      variants={leftContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="InnerContainer h-fit w-full max-w-[500px] flex-col gap-8 self-end rounded-r-xl py-6 pl-8 pr-4 mini:pl-4 xs:px-8 lg:gap-16 xxl:w-fit">
        <motion.h2
          className="ServicesTitle text-gradient-clip mb-3 flex gap-2 font-sans text-3xl uppercase leading-normal tracking-widest text-white sm:text-4xl"
          variants={itemVariants}
        >
          Services
        </motion.h2>
        <motion.p
          className="ServicesTitle text-white xs:max-w-[600px]"
          variants={itemVariants}
        >
          I offer full branding, design, and web development services. You can
          find examples of client sites below in the projects section, or see
          examples of brand work here.
        </motion.p>
        <motion.div
          className="ButtonContainer my-6 mr-5 flex flex-col gap-4 mini:mr-0 mini:flex-row"
          variants={itemVariants}
        >
          <SiteButton
            size="large"
            textColor="text-orange-200"
            style="orange"
            onClick={() => showModal(<BrandModal />)}
          >
            Example Brand Guide
          </SiteButton>
          <SiteButton
            size="large"
            textColor="text-orange-200"
            style="orange"
            onClick={() => showModal(<ContactModal />)}
          >
            Inquire
          </SiteButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
