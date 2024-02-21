import React from "react";
import gitHubIcon from "@/public/github_icon.png";
import xIcon from "@/public/x-social-icon.png";
import linkedInIcon from "@/public/linkedin_icon.png";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";

export const SocialContainer = () => {
  return (
    <div className="_social-container flex gap-4">
      <Link
        rel="noopener noreferrer"
        aria-label="github profile"
        href={RESUME_DATA.gitHubURL}
        target="_blank"
      >
        <Image
          alt="Github icon"
          src={gitHubIcon}
          className="_social-icon global__hover-animation"
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
          className="_social-icon global__hover-animation"
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
          className="_social-icon global__hover-animation"
          width={45}
          height={45}
        />
      </Link>
    </div>
  );
};

export default SocialContainer;
