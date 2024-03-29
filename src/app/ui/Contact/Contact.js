import React, { useEffect } from "react";
import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";
import SocialContainer from "../SocialContainer/SocialContainer";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-clip-path-top"></div>
      <section id="contact-section" className="contact-outer-container">
        <i className="contact-message">
          Please feel free to contact me for work, suggestions, or networking!
        </i>
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
          tabIndex="-1"
          href={RESUME_DATA.resumeURL}
          target="_blank"
        >
          <button
            aria-label="view resume as PDF"
            className="resume-button-footer global-button"
          >
            View Resume
          </button>
        </Link>
        <SocialContainer />
      </section>
    </div>
  );
};
