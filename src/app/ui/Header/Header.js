"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { resumeData } from "@/src/lib/resumeData";
// import { ParticlesAnimation } from '../ParticlesAnimation/ParticlesAnimation';
import gitHubIcon from "@/public/github_icon.png";
import twitterIcon from "@/public/twitter_icon.png";
import linkedInIcon from "@/public/linkedin_icon.png";
import "./Header.css";

export const Header = () => {
  const performSmoothScroll = () => {
    document
      .querySelector("#about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home-section" className="header-outer-container">
      {/* <ParticlesAnimation /> */}
      <h1 className="title-name">Joshua</h1>
      <h1 className="title-name">Duncan</h1>
      <h2 className="title-industry">Software Engineer</h2>
      <div className="social-icon-container">
        <Link
          rel="noopener noreferrer"
          aria-label="github profile"
          href={resumeData.gitHubURL}
          target="_blank"
        >
          <Image
            alt="Github icon"
            src={gitHubIcon}
            className="social-icon icon"
            width={45}
            height={45}
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          aria-label="linkedin profile"
          href={resumeData.linkedInURL}
          target="_blank"
        >
          <Image
            alt="Linkedin icon"
            src={linkedInIcon}
            className="social-icon icon"
            width={45}
            height={45}
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          aria-label="twitter profile"
          href={resumeData.twitterURL}
          target="_blank"
        >
          <Image
            alt="Twitter icon"
            src={twitterIcon}
            className="social-icon icon"
            width={45}
            height={45}
          />
        </Link>
      </div>
      <button
        aria-label="scroll down"
        onClick={performSmoothScroll}
        className="down-arrow icon"
      ></button>
    </section>
  );
};
