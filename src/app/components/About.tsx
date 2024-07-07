import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";
import { FlipWords } from "./UI-Libraries/FlipWords";
import ContactCard from "./UI-Elements/ContactCard";
import SiteButton from "./UI-Elements/SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ResumeModal from "./Modals/ResumeModal";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import CalendlyButton from "./UI-Elements/CalendlyButton";
import SectionTitle from "./UI-Elements/SectionTitle";

export const About = () => {
  const words = ["Hello!", "Bonjour!", "Hola!", "Kanichiwa!"];
  const { showModal } = useModal();

  return (
    <section className="AboutSection h-fit scroll-mt-20" id="about-section">
      <div className="TitleContainer ml-[5%]">
        <SectionTitle title="About Me" />
      </div>
      <div className="OuterContainer mt-4 flex h-full w-full justify-center border-y-4 border-double border-gray-500 bg-gradient-to-br from-black via-gray-900 to-black shadow-secondaryBright">
        <div className="InnerContainer flex w-full max-w-[2500px] flex-col items-center justify-center gap-8 py-8 md:py-16 lg:flex-row lg:items-start lg:gap-16 lg:text-left xxl:gap-20">
          <motion.div
            className="LeftContainer mr-5 h-fit max-w-[620px] flex-col gap-8 self-start mini:mr-0 xs:w-[75%] xs:self-center lg:max-w-none lg:gap-16 lg:self-start xxl:w-fit"
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.2,
              delay: 0.5,
            }}
          >
            <div className="ImageContainer flex h-fit w-full justify-end overflow-hidden rounded-r-xl bg-black/90 p-4 pr-8 shadow-secondaryBright min-[382px]:pl-[calc((100vw-350px-32px)/2)] xs:justify-center xs:rounded-xl xs:pl-4 lg:justify-end lg:rounded-l-none xxl:rounded-xl xxl:pr-4">
              <Image
                alt="Josh's Picture"
                src="/profile_pic.jpeg"
                className="ProfilePic ml-4 aspect-square h-auto max-h-[350px] w-auto rounded-xl object-contain xs:ml-0 lg:aspect-square lg:h-full lg:max-h-[450px] lg:w-auto"
                width={450}
                height={450}
              />
            </div>
          </motion.div>
          <motion.div
            className="RightContainer ml-5 w-auto max-w-[620px] self-end overflow-hidden rounded-l-xl bg-black/90 px-8 py-6 pr-[calc((100vw-350px)/2)] shadow-secondaryBright mini:ml-0 xs:w-[75%] xs:self-center xs:rounded-xl xs:pr-8 sm:ml-0 lg:w-full lg:max-w-none lg:self-start lg:rounded-r-none xxl:max-w-[900px] xxl:rounded-xl"
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.2,
              delay: 0.55,
            }}
          >
            <h2 className="Title mb-3 flex gap-2  text-3xl font-semibold uppercase leading-normal tracking-widest text-white sm:text-4xl">
              <FlipWords
                words={words}
                duration={1500}
                className="pl-0 font-sans text-white"
              />
            </h2>
            <p className="BioDescription mb-8 max-w-[350px] pr-4 text-white  xs:max-w-[600px] xxl:max-w-none">
              {parse(RESUME_DATA.bioDescription as string)}
            </p>
            <ContactCard titlePosition="justify-start" />
            <div className="ButtonContainer my-6 mr-5 flex flex-col gap-4 mini:mr-0 mini:flex-row">
              <SiteButton
                size="large"
                textColor="text-orange-200"
                style="orange"
                onClick={() => showModal(<ResumeModal />)}
              >
                View Resume
              </SiteButton>
              <CalendlyButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
