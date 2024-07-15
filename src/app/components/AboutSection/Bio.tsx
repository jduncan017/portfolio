import { useState } from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/src/lib/resumeData";
import { FlipWords } from "../UI-Libraries/FlipWords";
import ContactCard from "../UI-Elements/ContactCard";
import SiteButton from "../UI-Elements/SiteButton";
import ResumeModal from "../Modals/ResumeModal";
import parse from "html-react-parser";
import { useModal } from "@/src/contexts/ModalContext";

export default function Bio() {
  const words = ["Hello!", "Bonjour!", "Hola!", "Kanichiwa!"];
  const [startFlipping, setStartFlipping] = useState(false);
  const { showModal } = useModal();

  const rightContainerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        ease: "easeInOut",
        type: "tween",
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.4,
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
      className="RightContainer ml-5 w-auto max-w-[620px] self-end overflow-hidden rounded-l-xl border-l border-t border-white/30 bg-black/40 px-8 py-6 pr-[calc((100vw-375px)/2)] shadow-secondaryDim mini:ml-0 xs:w-[75%] xs:self-center xs:rounded-xl xs:pr-8 sm:ml-0 lg:h-full lg:w-fit lg:max-w-none lg:self-start xxl:max-w-[900px] xxl:rounded-xl"
      variants={rightContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="Title mb-3 flex gap-2 text-3xl font-semibold uppercase leading-normal tracking-widest text-white sm:text-4xl"
        variants={itemVariants}
      >
        <FlipWords
          words={words}
          duration={1800}
          className="text-gradient-clip pl-0 font-sans text-white"
          start={startFlipping}
        />
      </motion.h2>
      <motion.p
        className="BioDescription mb-5 max-w-[375px] pr-4 text-white xs:max-w-[600px] xxl:max-w-none"
        variants={itemVariants}
        onAnimationComplete={() => setStartFlipping(true)}
      >
        {parse(RESUME_DATA.bioDescription as string)}
      </motion.p>
      <motion.div className="CardContainer" variants={itemVariants}>
        <ContactCard />
      </motion.div>
      <motion.div
        className="ButtonContainer mb-2 mr-5 mt-6 flex flex-col gap-4 mini:mr-0 mini:flex-row"
        variants={itemVariants}
      >
        <SiteButton
          size="large"
          textColor="text-gray-200"
          style="silverHollow"
          onClick={() => showModal(<ResumeModal />)}
        >
          View Resume
        </SiteButton>
      </motion.div>
    </motion.div>
  );
}
