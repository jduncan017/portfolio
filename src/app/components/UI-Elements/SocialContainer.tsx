import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";

export const SocialContainer = () => {
  return (
    <div className="_social-container flex gap-3">
      <Link
        rel="noopener noreferrer"
        aria-label="github profile"
        href={RESUME_DATA.gitHubURL}
        target="_blank"
        className="global__hover-animation flex flex-col items-center gap-1.5 text-transparent sm:hover:text-white"
      >
        <Image
          alt="Github icon"
          src="/socialIcons/github-icon.png"
          className="SocialIcon opacity-80"
          width={40}
          height={40}
        />
        <p className="IconName w-[40px] text-center text-xs font-light italic transition-all duration-300">
          Github
        </p>
      </Link>
      <Link
        rel="noopener noreferrer"
        aria-label="linkedin profile"
        href={RESUME_DATA.linkedInURL}
        target="_blank"
        className="global__hover-animation flex flex-col items-center gap-1.5 text-transparent hover:text-white"
      >
        <Image
          alt="Linkedin icon"
          src="/socialIcons/linkedin-icon.png"
          className="SocialIcon global__hover-animation opacity-80"
          width={40}
          height={40}
        />
        <p className="IconName w-[40px] text-center text-xs font-light italic transition-all duration-300">
          LinkedIn
        </p>
      </Link>
      <Link
        rel="noopener noreferrer"
        aria-label="X profile"
        href={RESUME_DATA.xURL}
        target="_blank"
        className="global__hover-animation flex flex-col items-center gap-1.5 text-transparent hover:text-white"
      >
        <Image
          alt="X icon"
          src="/socialIcons/x-icon.png"
          className="SocialIcon global__hover-animation opacity-80"
          width={40}
          height={40}
        />
        <p className="IconName w-[40px] text-center text-xs font-light italic transition-all duration-300">
          X
        </p>
      </Link>
      <Link
        rel="noopener noreferrer"
        aria-label="medium profile"
        href={RESUME_DATA.mediumURL}
        target="_blank"
        className="global__hover-animation flex flex-col items-center gap-1.5 text-transparent hover:text-white"
      >
        <Image
          alt="Medium Icon"
          src="/socialIcons/medium-icon.png"
          className="SocialIcon global__hover-animation opacity-80"
          width={40}
          height={40}
        />
        <p className="IconName w-[40px] text-center text-xs font-light italic transition-all duration-300">
          Medium
        </p>
      </Link>
    </div>
  );
};

export default SocialContainer;
