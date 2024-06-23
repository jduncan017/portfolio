import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile_pic.jpeg";
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
    <section className="AboutWrapper py-10" id="about-section">
      <div
        className="_about-outer-container flex h-auto w-full flex-col items-center justify-center gap-8 
       px-[8%] py-0 md:px-[15%] md:py-10 lg:flex-row lg:items-start lg:gap-16 lg:text-left"
      >
        <Image
          alt="Josh's Picture"
          src={profilePic}
          className="_profile-pic h-auto max-h-[350px] w-[90vw] max-w-[350px] rounded-2xl sm:w-[40vw] lg:w-[20vw]"
        />
        <div className="_info-container w-full">
          <h2 className="_about-title font-serif text-4xl leading-normal tracking-wide text-white sm:text-4xl">
            Hello! 👋🏼
          </h2>
          <div className="_about__bio text-xl">{printBio()}</div>
          <div className="_contact-container mt-[5%]">
            <h2 className="_contact-title font-serif text-3xl leading-relaxed tracking-wide text-white sm:text-2xl">
              Contact Details
            </h2>
            <p className="global-p-text text-white">Joshua Duncan</p>
            <p className="global-p-text text-white">Denver, CO</p>
            <Link
              rel="noopener noreferrer"
              aria-label="send email"
              href="mailto: EmailJoshDuncan@gmail.com"
              target="_blank"
            >
              <p className="global-p-text text-white underline">
                EmailJoshDuncan@gmail.com
              </p>
            </Link>
            <div className="_about__button-container mini:flex-row my-6 flex flex-col gap-4">
              <Link
                rel="noopener noreferrer"
                href={RESUME_DATA.resumeURL}
                target="_blank"
              >
                <button
                  tabIndex={-1}
                  aria-label="view resume as PDF"
                  className="_resume-button global-button"
                >
                  View Resume
                </button>
              </Link>
              <Link
                rel="noopener noreferrer"
                href="https://calendly.com/jduncan017/1-hour-meeting"
                target="_blank"
              >
                <button
                  tabIndex={-1}
                  aria-label="Schedule a meeting"
                  className="_schedule-button global-button"
                >
                  Schedule a Meeting
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
