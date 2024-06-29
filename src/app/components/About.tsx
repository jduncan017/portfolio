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

export const About = () => {
  const words = ["Hello!", "Bonjour!", "Hola!", "Kanichiwa!"];
  const { showModal } = useModal();

  return (
    <section className="AboutSection h-fit scroll-mt-20" id="about-section">
      <h1 className="Header mx-auto mb-4 w-[90%] border-solid text-start font-sans text-3xl font-semibold tracking-widest text-white md:text-4xl">
        About Me
      </h1>
      <div className="OuterContainer flex h-full w-full flex-col items-center justify-center gap-8 border-y-4 border-double border-gray-500 bg-gradient-to-br from-black via-gray-900 to-black py-8 shadow-customBright md:py-16 lg:flex-row lg:items-start lg:gap-16 lg:text-left">
        <div className="LeftContainer mr-5 h-full max-w-[620px] flex-col gap-8 self-start mini:mr-0 xs:w-[75%] xs:self-center lg:max-w-none lg:gap-16 lg:self-start">
          <div className="ImageContainer flex h-full w-full justify-end overflow-hidden rounded-r-xl bg-black/90 p-4 pr-8 shadow-customBright min-[382px]:pl-[calc((100vw-350px-32px)/2)] xs:justify-center xs:rounded-xl xs:pl-4 lg:justify-end lg:rounded-l-none">
            <Image
              alt="Josh's Picture"
              src="/profile_pic.jpeg"
              className="ProfilePic ml-4 aspect-square h-auto max-h-[350px] w-auto rounded-xl object-contain xs:ml-0 lg:aspect-square lg:h-full lg:max-h-[450px] lg:w-auto"
              width={450}
              height={450}
            />
          </div>
        </div>
        <div className="RightContainer ml-5 w-auto max-w-[620px] self-end overflow-hidden rounded-l-xl bg-black/90 px-8 py-6 pr-[calc((100vw-350px)/2)] shadow-customBright mini:ml-0 xs:w-[75%] xs:self-center xs:rounded-xl xs:pr-8 sm:ml-0 lg:w-full lg:max-w-none lg:self-start lg:rounded-r-none">
          <h2 className="Title mb-3 flex gap-2 font-sans text-3xl font-bold uppercase leading-normal tracking-widest text-white sm:text-4xl">
            <FlipWords
              words={words}
              duration={1500}
              className="pl-0 text-white"
            />
          </h2>
          <p className="BioDescription mb-8 max-w-[350px] pr-4 font-sans text-white xs:max-w-[600px]">
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
            <Link
              rel="noopener noreferrer"
              href="https://calendly.com/jduncan017/1-hour-meeting"
              target="_blank"
              type="button"
              className="w-full mini:w-auto"
            >
              <SiteButton
                size="large"
                textColor="text-orange-200"
                style="orange"
                addClasses="w-full mini:w-auto"
              >
                Schedule a Meeting
              </SiteButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
