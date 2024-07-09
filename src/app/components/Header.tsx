import SocialContainer from "./UI-Elements/SocialContainer";
import { ParticlesAnimation } from "./UI-Libraries/ParticlesAnimation/ParticlesAnimation";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
  const performSmoothScroll = () => {
    const aboutSection = document.querySelector("#about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section does not exist!");
    }
  };

  return (
    <section
      className="HeaderContainer relative h-[100vh] max-h-[1500px]"
      id="header-section"
    >
      <div className="ParticlesBackground pb-25 absolute z-[-10] h-full w-full text-center">
        <ParticlesAnimation />
      </div>
      <div className="HeaderTextContainer mx-auto flex flex-col items-center pt-[15vh] sm:pt-[30vh]">
        <div className="TextContainer flex max-w-[95%] flex-col items-center rounded-[20px] bg-black/5 px-4 py-20 text-center opacity-90 shadow-primary backdrop-blur-md xs:max-w-[80%] xs:px-8 md:px-20 md:py-20 lg:py-28">
          <motion.h1
            className="Title text-gradient-clip text-center font-gulzar text-5xl font-medium uppercase leading-tight text-white sm:text-nowrap sm:pb-0 sm:text-6xl sm:leading-tight lg:text-7xl lg:leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
          >
            Joshua Duncan
          </motion.h1>
          <motion.h2
            className="Description text-gradient-clip mb-6 mt-1 font-gulzar text-2xl font-bold text-white sm:text-3xl"
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
            className="ScrollDown text-gradient-clip font-gulzar text-xl uppercase tracking-wide text-gray-200"
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
              onClick={performSmoothScroll}
              className="DownArrow global__hover-animation relative mt-4 border-none delay-300"
              id="nav-trigger"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
