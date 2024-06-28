import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";
import SocialContainer from "./UI-Elements/SocialContainer";
import ContactCard from "./UI-Elements/ContactCard";
import SiteButton from "./UI-Elements/SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ResumeModal from "./Modals/ResumeModal";

export const Footer = () => {
  const { showModal } = useModal();
  return (
    <section
      className="Footer flex flex-col items-center gap-10 border-t border-t-gray-800 bg-black px-5 py-10 shadow-customBright xs:px-20 md:flex-row md:items-start lg:gap-20"
      id="contact-section"
    >
      <ContactCard titlePosition="justify-center" />
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
        <div className="ButtonContainer my-6 flex flex-col items-center gap-4 mini:flex-row">
          <SiteButton
            size="large"
            textColor="text-orange-200"
            style="orange"
            onClick={() => showModal(<ResumeModal />)}
          >
            View Resume
          </SiteButton>
          <Link
            rel="noopener noreferrer"
            href="https://calendly.com/jduncan017/1-hour-meeting"
            target="_blank"
            type="button"
          >
            <SiteButton size="large" textColor="text-orange-200" style="orange">
              Schedule a Meeting
            </SiteButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
