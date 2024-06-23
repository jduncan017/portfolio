import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";
import SocialContainer from "./UI-Elements/SocialContainer";

export const Contact = () => {
  return (
    <div className="Contact bg-gray-800">
      <section
        id="contact-section"
        className="ContactOuterContainer flex w-full flex-col items-center bg-black pb-16 pt-6"
      >
        <i className="ContactMessage my-5 px-14 text-center text-gray-400">
          Please feel free to contact me for work, suggestions, or networking!
        </i>
        <p className="global-p-text text-white">Joshua Duncan</p>
        <p className="global-p-text text-white">Denver, CO</p>
        <Link
          rel="noopener noreferrer"
          aria-label="send email"
          href="mailto:EmailJoshDuncan@gmail.com"
          target="_blank"
        >
          <p className="global-p-text text-white underline">
            EmailJoshDuncan@gmail.com
          </p>
        </Link>
        <Link
          rel="noopener noreferrer"
          tabIndex={-1}
          href={RESUME_DATA.resumeURL}
          target="_blank"
        >
          <button
            aria-label="view resume as PDF"
            className="ResumeButtonFooter global-button mb-5 mt-10 w-64"
          >
            View Resume
          </button>
        </Link>
        <SocialContainer />
      </section>
    </div>
  );
};
