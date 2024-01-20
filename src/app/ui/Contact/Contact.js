import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gitHubIcon from "@/public/github_icon.png";
import xIcon from "@/public/x-social-icon.png";
import linkedInIcon from "@/public/linkedin_icon.png";
import { resumeData } from "@/src/lib/resumeData";
import "./Contact.css";

export const Contact = () => {
  useEffect(() => {
    const socialIcons = document.querySelectorAll(".icon");
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseleave", (e) =>
        icon.classList.add("mouse-leave")
      );
    });
  });

  return (
    <div>
      <div className="contact-clip-path-top"></div>
      <section id="contact-section" className="contact-outer-container">
        <i className="contact-message">
          Please feel free to contact me for work, suggestions, or networking!
        </i>
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
          tabIndex="-1"
          href={resumeData.resumeURL}
          target="_blank"
        >
          <button
            aria-label="view resume as PDF"
            className="resume-button-footer global__button"
          >
            Resume.pdf
          </button>
        </Link>
        <div className="social-icons-container">
          <Link
            rel="noopener noreferrer"
            aria-label="github profile"
            href={resumeData.gitHubURL}
            target="_blank"
          >
            <Image
              alt="Github icon"
              src={gitHubIcon}
              className="social-icon icon global__hover-animation"
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
              className="social-icon icon global__hover-animation"
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
              src={xIcon}
              className="social-icon icon global__hover-animation"
              width={45}
              height={45}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};
