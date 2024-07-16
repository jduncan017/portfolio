import { useState } from "react";
import { motion } from "framer-motion";
import { FlipWords } from "../UI-Libraries/FlipWords";
import SiteButton from "../UI-Elements/SiteButton";
import ResumeModal from "../Modals/ResumeModal";
import { useModal } from "@/src/contexts/ModalContext";
import ContactCard from "../UI-Elements/ContactCard";
import ContactModal from "../Modals/contactModal";

export default function Bio() {
  const words = ["Hello,", "Bonjour,", "Hola,", "Kanichiwa,"];
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
        staggerChildren: 0.3,
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
      className="RightContainer ml-5 flex w-auto max-w-[620px] flex-col self-end overflow-hidden rounded-l-xl border-l border-t border-white/30 bg-black/50 py-6 pl-6 pr-[44px] text-white shadow-secondaryDim transition-all duration-700 hover:shadow-secondaryBright mini:ml-0 mini:pl-8 mini:pr-[calc((100vw-375px)/2)] xs:w-[75%] xs:self-center xs:rounded-xl xs:pr-8 sm:ml-0 lg:h-full lg:w-fit lg:max-w-none lg:self-start xxl:max-w-[900px] xxl:rounded-xl"
      variants={rightContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="Title mb-2 flex gap-2 text-xl font-semibold uppercase leading-normal tracking-widest text-white sm:text-2xl"
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
        className="BioDescription mb-3 max-w-[375px] border-b border-dotted border-gray-600 pb-3 text-white xs:max-w-[600px] xxl:max-w-none"
        variants={itemVariants}
        onAnimationComplete={() => setStartFlipping(true)}
      >
        {` My name is Josh. I'm a full-stack developer that brings a unique background
        of technical expertise and business acumen to my projects. My career
        has included roles in software development, project management, leadership,
         sales, and marketing, providing me with a broad perspective
        of the digital landscape.`}
      </motion.p>
      <motion.div className="MotionContainer" variants={itemVariants}>
        <h3 className="BioHeader text-gradient-clip text-lg uppercase tracking-wide">
          Current Occupation:
        </h3>
        <p className="mb-3 border-b border-dotted border-gray-600 pb-3 text-lg capitalize">
          Freelance Developer & Brand Strategist
        </p>
      </motion.div>
      <motion.div
        className="MotionContainer mb-3 border-b border-dotted border-gray-600 pb-3"
        variants={itemVariants}
      >
        <h3 className="BioHeader text-gradient-clip mb-2 text-lg uppercase tracking-wide">
          I Specialize In:
        </h3>
        <ul className="JobItems flex flex-col">
          <li className="JobItem mb-3 flex items-center gap-2">
            <span className="text-secondary">{"->"}</span>
            <p>Development of Web Applications</p>
          </li>

          <li className="JobItem mb-3 flex items-center gap-2">
            <span className="text-secondary">{"->"}</span>
            <p>Creating Digital Brand Identities</p>
          </li>

          <li className="JobItem mb-3 flex items-center gap-2">
            <span className="text-secondary">{"->"}</span>
            <p>Target Audience Identification</p>
          </li>

          <li className="JobItem flex items-center gap-2">
            <span className="text-secondary">{"->"}</span>
            <p>Competitor Market Research</p>
          </li>
        </ul>
      </motion.div>
      <motion.div className="CardContainer " variants={itemVariants}>
        <ContactCard />
      </motion.div>
      <motion.div
        className="ButtonContainer mb-2 mt-6 flex flex-col gap-4 mini:mr-0 mini:flex-row"
        variants={itemVariants}
      >
        <SiteButton
          size="large"
          textColor="text-black"
          style="silver"
          onClick={() => showModal(<ContactModal />)}
        >
          Contact Me
        </SiteButton>
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
