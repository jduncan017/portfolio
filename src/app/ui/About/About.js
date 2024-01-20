import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile_pic.jpeg";
import { resumeData } from "@/src/lib/resumeData";
import "./About.css";

export const About = () => {
  const scrollToTechSkillsSection = () => {
    document
      .querySelector("#skills-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const printBio = () => {
    const bio1 = resumeData.bioDescription1;
    const bio2 = resumeData.bioDescription2.split("<skillsLink>");
    return (
      <div>
        <p className="about-text">{bio1}</p>
        <p className="about-text about-text-2">
          {" "}
          {bio2[0]}
          <span
            onClick={scrollToTechSkillsSection}
            className="tech-skills-link"
          >
            See complete list
          </span>
          {bio2[1]}
        </p>
      </div>
    );
  };

  return (
    <div className="about-wrapper">
      <div className="about-clip-path-top"></div>
      <section id="about-section" className="about-outer-container">
        <div className="profile-pic-container">
          <Image
            alt="Josh's Picture"
            src={profilePic}
            className="profile-pic"
          />
        </div>
        <div className="about-info-container">
          <h2 className="about-text">Greetings!</h2>
          {printBio()}
          <div className="contact-info-container">
            <h2 className="about-text">Contact Details</h2>
            <p className="about-text">Joshua Duncan</p>
            <p className="about-text">Denver, CO</p>
            <Link
              rel="noopener noreferrer"
              aria-label="send email"
              href="mailto: EmailJoshDuncan@gmail.com"
              target="_blank"
            >
              <p className="about-text email-text">EmailJoshDuncan@gmail.com</p>
            </Link>
            <Link
              rel="noopener noreferrer"
              href={resumeData.resumeURL}
              target="_blank"
            >
              <button
                tabIndex="-1"
                aria-label="view resume as PDF"
                className="resume-button global__button"
              >
                Resume.pdf
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="about-clip-path-bottom"></div>
    </div>
  );
};
