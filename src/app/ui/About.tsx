import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";
import { BackgroundGradient } from "./UILibraries/background-gradient";
import { FlipWords } from "./UILibraries/FlipWords";
import ContactCard from "./UI-Elements/ContactCard";
import SiteButton from "./UI-Elements/SiteButton";

export const About = () => {
  const words = ["Hello!", "Aloha!", "Hola!", "Greetings!"];

  const printBio = () => {
    const bio1 = RESUME_DATA.bioDescription1;
    const bio2 = RESUME_DATA.bioDescription2;
    const bio3 = RESUME_DATA.bioDescription3.split("<skillsLink>");
    return (
      <div className="text-white">
        <p className="">{bio1}</p>
        <p className="my-3">{bio2}</p>
        <p className="">
          {" "}
          {bio3[0]}
          {bio3[1]}
        </p>
      </div>
    );
  };

  return (
    <section className="AboutSection h-fit scroll-mt-20" id="about-section">
      <h1 className="Header mx-auto mb-4 w-[90%] border-solid text-start font-sans text-3xl font-semibold uppercase tracking-widest text-white md:text-4xl">
        About
      </h1>
      <div className="OuterContainer shadow-customBright flex h-full w-full flex-col items-center justify-center gap-8 border-y-4 border-double border-gray-500 bg-gradient-to-br from-black via-gray-900 to-black py-8 md:py-16 lg:flex-row lg:items-start lg:gap-16 lg:text-left">
        <BackgroundGradient containerClassName="w-full lg:w-full sm:w-[75%] p-0 mr-10 sm:mr-0">
          <div className="LeftContainer flex h-full w-full justify-end overflow-hidden rounded-r-xl bg-black/90 p-4 sm:justify-center sm:rounded-xl lg:justify-end lg:rounded-l-none">
            <Image
              alt="Josh's Picture"
              src="/profile_pic.jpeg"
              className="_profile-pic aspect-square h-auto max-h-[350px] w-auto rounded-xl object-contain lg:aspect-square lg:h-full lg:max-h-[450px] lg:w-auto"
              width={450}
              height={450}
            />
          </div>
        </BackgroundGradient>
        <BackgroundGradient containerClassName="w-auto p-0 sm:w-[75%] lg:w-full ml-10 sm:ml-0">
          <div className="RightContainer w-full overflow-hidden rounded-l-xl bg-black/90 px-8 py-6 sm:rounded-xl lg:w-full lg:rounded-r-none">
            <h2 className="Title mb-3 flex gap-2 font-sans text-4xl font-bold uppercase leading-normal tracking-widest text-white">
              <p>👋🏼</p>
              <FlipWords
                words={words}
                duration={2000}
                className="pl-0 text-white"
              />
            </h2>
            <div className="BioDescription mb-10 max-w-[600px] font-sans text-lg">
              {printBio()}
            </div>
            <ContactCard titlePosition="justify-start" />
            <div className="ButtonContainer my-6 flex flex-col gap-4 mini:flex-row">
              <Link
                rel="noopener noreferrer"
                href={RESUME_DATA.resumeURL}
                target="_blank"
              >
                <SiteButton
                  size="large"
                  aria="View resume as PDF"
                  textColor="text-orange-200"
                  style="orange"
                >
                  View Resume
                </SiteButton>
              </Link>
              <Link
                rel="noopener noreferrer"
                href="https://calendly.com/jduncan017/1-hour-meeting"
                target="_blank"
                type="button"
              >
                <SiteButton
                  size="large"
                  aria="Schedule a meeting"
                  textColor="text-orange-200"
                  style="orange"
                >
                  Schedule a Meeting
                </SiteButton>
              </Link>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};
