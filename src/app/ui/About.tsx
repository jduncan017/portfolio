import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";

export const About = () => {
  const printBio = () => {
    const bio1 = RESUME_DATA.bioDescription1;
    const bio2 = RESUME_DATA.bioDescription2;
    const bio3 = RESUME_DATA.bioDescription3.split("<skillsLink>");
    return (
      <div>
        <p className="global-p-text text-white">{bio1}</p>
        <p className="global-p-text mt-[12px] text-white">{bio2}</p>
        <p className="global-p-text mt-[12px] text-white">
          {" "}
          {bio3[0]}
          {bio3[1]}
        </p>
      </div>
    );
  };

  return (
    <section
      className="AboutSection h-fit scroll-mt-20 py-10"
      id="about-section"
    >
      <h1 className="Header mx-auto mb-4 w-[80%] border-solid text-start text-3xl font-semibold uppercase tracking-widest text-white md:text-4xl">
        About
      </h1>
      <div className="OuterContainer flex h-full w-full flex-col items-center justify-center gap-8 border-y-4 border-double border-gray-500 py-8 md:py-16 lg:flex-row lg:items-start lg:gap-16 lg:text-left">
        <div className="LeftContainer mr-10 flex h-full w-full justify-end overflow-hidden rounded-2xl bg-gray-800/80 p-4 sm:mr-0 sm:w-[75%] sm:justify-center lg:w-full lg:justify-end lg:rounded-l-none">
          <Image
            alt="Josh's Picture"
            src="/profile_pic.jpeg"
            className="_profile-pic aspect-square h-auto max-h-[350px] w-auto rounded-2xl object-contain lg:aspect-square lg:h-full lg:max-h-none lg:w-auto"
            width={700}
            height={700}
          />
        </div>
        <div className="RightContainer ml-10 w-auto overflow-hidden rounded-2xl bg-gray-800/80 px-8 py-6 sm:ml-0 sm:w-[75%] lg:w-full lg:rounded-r-none">
          <h2 className="Title mb-3 font-serif text-4xl uppercase leading-normal tracking-widest text-white">
            Hello! 👋🏼
          </h2>
          <div className="BioDescription max-w-[600px] font-sans text-xl">
            {printBio()}
          </div>
          <div className="ContactHeader ml-1 mt-10 flex h-min items-end gap-1">
            <h3 className="ContactCard text-semibold text-lg uppercase text-white">
              Contact Card
            </h3>
            <p className="ContactCard text-sm italic leading-7 text-gray-300">
              {"(click)"}
            </p>
          </div>
          <div className="ContactContainer w-[300px] cursor-pointer rounded-sm border-4 border-double border-stone-500 bg-stone-200 px-6 py-4 text-stone-700 transition-all duration-500 hover:scale-105 xs:w-[340px]">
            <h2 className="Name font-serif text-xl uppercase leading-relaxed tracking-wide sm:text-2xl">
              Joshua Duncan
            </h2>
            <p className="Title mb-12 font-serif text-xs uppercase opacity-60">
              Software Engineer / Web Developer
            </p>
            <div className="InfoContainer flex gap-2">
              <Image src="/web.svg" width={25} height={25} alt="web" />
              <p className="global-p-text text-sm xs:text-base">Denver, CO</p>
            </div>
            <div className="InfoContainer flex gap-2">
              <Image src="/email.svg" width={25} height={25} alt="email" />
              <p className="global-p-text text-sm xs:text-base">
                emailjoshduncan@gmail.com
              </p>
            </div>
          </div>
          <div className="ButtonContainer my-6 flex flex-col gap-4 mini:flex-row">
            <Link
              rel="noopener noreferrer"
              href={RESUME_DATA.resumeURL}
              target="_blank"
            >
              <button
                tabIndex={-1}
                aria-label="view resume as PDF"
                className="ResumeButton global-button"
              >
                View Resume
              </button>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://calendly.com/jduncan017/1-hour-meeting"
              target="_blank"
              type="button"
            >
              <button
                tabIndex={-1}
                aria-label="Schedule a meeting"
                className="MeetingButton global-button"
                type="button"
              >
                Schedule a Meeting
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
