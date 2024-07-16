import SocialContainer from "./UI-Elements/SocialContainer";
import { ParticlesAnimation } from "./UI-Libraries/ParticlesAnimation";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
  const performSmoothScroll = (sectionName: string) => {
    const section = document.querySelector(`#${sectionName}-section`);

    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="HeaderContainer relative mb-32 flex h-[100vh] max-h-[1500px] justify-center px-4"
      id="header-section"
    >
      <div className="ParticlesBackground pb-25 absolute z-[-10] h-full w-full text-center">
        <ParticlesAnimation />
      </div>
      <div className="HeaderTextContainer flex flex-col items-center pt-[25vh] sm:my-auto sm:pt-[15vh]">
        <div className="TextContainer flex w-full max-w-[1000px] flex-col items-center rounded-[20px] bg-black/50 px-10 pb-10 pt-12 text-center shadow-primary backdrop-blur-lg sm:px-20 md:py-28">
          <motion.h1
            className="Title text-gradient-teal text-center font-gulzar text-3xl font-medium uppercase leading-tight text-white mini:text-4xl xs:text-5xl xs:leading-tight sm:pb-0 sm:leading-loose md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
          >
            Joshua Duncan
          </motion.h1>
          <motion.h2
            className="Description text-gradient-teal mb-6 mt-1 font-gulzar text-2xl font-bold text-white sm:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.75, ease: "easeOut" }}
          >
            Software Engineer
          </motion.h2>
          <motion.div
            className="SocialContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.75, ease: "easeIn" }}
          >
            <SocialContainer />
          </motion.div>
        </div>
        <div className="Scroll mt-[6vh] flex flex-col items-center">
          <motion.h3
            className="ScrollDown text-gradient-teal font-gulzar text-xl uppercase tracking-wide text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.75, ease: "easeIn" }}
          >
            (Scroll Down)
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3, ease: "easeIn" }}
          >
            <Image
              width={30}
              height={30}
              src={"/down-arrow.png"}
              alt="scroll down"
              aria-label="scroll down"
              onClick={() => performSmoothScroll("about")}
              className="DownArrow global__hover-animation relative mt-4 border-none delay-300"
              id="nav-trigger"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
