import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";
import SocialContainer from "./UI-Elements/SocialContainer";
import ContactCard from "./UI-Elements/ContactCard";
import SiteButton from "./UI-Elements/SiteButton";

export const Footer = () => {
  return (
    <section
      className="Footer shadow-customBright flex flex-col items-center gap-10 border-t border-t-gray-800 bg-black px-5 py-10 xs:px-20 md:flex-row md:items-start lg:gap-20"
      id="contact-section"
    >
      <ContactCard />
      <div className="FooterRightContainer flex w-full flex-col items-center md:items-start">
        <div className="SocialContainer w-fit">
          <p className="SocialTitle mb-2 w-full text-center text-sm uppercase text-white md:text-start">
            Social
          </p>
          <SocialContainer />
        </div>
        <p className="FooterMessage my-4 max-w-[500px] text-center text-gray-400 md:text-start">
          Please feel free to contact me for work, suggestions, or networking!
        </p>
        <div className="ButtonContainer my-6 flex flex-col gap-4 mini:flex-row">
          <Link
            rel="noopener noreferrer"
            href={RESUME_DATA.resumeURL}
            target="_blank"
          >
            <SiteButton
              size="large"
              aria="View resume as PDF"
              textColor="text-orange-200"
              style="orange"
            >
              View Resume
            </SiteButton>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="https://calendly.com/jduncan017/1-hour-meeting"
            target="_blank"
            type="button"
          >
            <SiteButton
              size="large"
              aria="Schedule a meeting"
              textColor="text-orange-200"
              style="orange"
            >
              Schedule a Meeting
            </SiteButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
