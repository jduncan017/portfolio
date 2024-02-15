"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";
import { ParticlesAnimation } from "../ParticlesAnimation/ParticlesAnimation";
import gitHubIcon from "@/public/github_icon.png";
import xIcon from "@/public/x-social-icon.png";
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
      <ParticlesAnimation />
      <h1 className="title-name">Joshua</h1>
      <h1 className="title-name">Duncan</h1>
      <h2 className="title-industry">Software Engineer</h2>
      <div className="home-section__social-container">
        <Link
          rel="noopener noreferrer"
          aria-label="github profile"
          href={RESUME_DATA.gitHubURL}
          target="_blank"
        >
          <Image
            alt="Github icon"
            src={gitHubIcon}
            className="home-section__social-icon global__hover-animation"
            width={45}
            height={45}
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          aria-label="linkedin profile"
          href={RESUME_DATA.linkedInURL}
          target="_blank"
        >
          <Image
            alt="Linkedin icon"
            src={linkedInIcon}
            className="home-section__social-icon global__hover-animation"
            width={45}
            height={45}
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          aria-label="twitter profile"
          href={RESUME_DATA.twitterURL}
          target="_blank"
        >
          <Image
            alt="Twitter icon"
            src={xIcon}
            className="home-section__social-icon global__hover-animation"
            width={45}
            height={45}
          />
        </Link>
      </div>
      <button
        aria-label="scroll down"
        onClick={performSmoothScroll}
        className="down-arrow global__hover-animation"
      ></button>
    </section>
  );
};
