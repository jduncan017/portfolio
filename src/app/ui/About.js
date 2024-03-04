import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile_pic.jpeg";

export const About = ({ RESUME_DATA }) => {
  const scrollToTechSkillsSection = () => {
    document
      .querySelector("#skills-section")
      .scrollIntoView({ behavior: "smooth" });
  };

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
          <span
            onClick={scrollToTechSkillsSection}
            className="_skills-link font-serif underline transition-opacity hover:cursor-pointer hover:opacity-60"
          >
            See complete list
          </span>
          {bio3[1]}
        </p>
      </div>
    );
  };

  return (
    <section className="_about-wrapper" id="about-section">
      <div
        className="_about-clip-path-top h-[150px] w-full bg-darkGrey"
        style={{ clipPath: "polygon(0% 50%, 0% 100%, 100% 100%)" }}
      />
      <section
        className="_about-outer-container flex h-auto w-full flex-col items-center justify-center gap-8 
      bg-darkGrey px-[14%] py-0 md:px-[15%] md:py-10 lg:flex-row lg:items-start lg:gap-16 lg:text-left"
      >
        <Image
          alt="Josh's Picture"
          src={profilePic}
          className="_profile-pic hidden h-auto max-h-[275px] w-[40vw] max-w-[275px] rounded-full xs:block lg:w-[20vw]"
        />
        <div className="_info-container w-full">
          <h2 className="_about-title font-serif text-2xl leading-normal tracking-wide text-white sm:text-2xl">
            Hello! 👋🏼
          </h2>
          <div className="_about__bio">{printBio()}</div>
          <div className="_contact-container mt-[5%]">
            <h2 className="_contact-title font-serif text-2xl leading-relaxed tracking-wide text-white sm:text-2xl">
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
            <Link
              rel="noopener noreferrer"
              href={RESUME_DATA.resumeURL}
              target="_blank"
            >
              <button
                tabIndex="-1"
                aria-label="view resume as PDF"
                className="_resume-button global-button mt-6"
              >
                View Resume
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div
        className="_clip-path-bottom mb-[-80px] h-20 w-full bg-darkGrey"
        style={{ clipPath: "polygon(0% 0%, 100% -50%, 100% 100%)" }}
      ></div>
    </section>
  );
};
