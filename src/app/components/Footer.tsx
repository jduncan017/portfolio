import Link from "next/link";
import { RESUME_DATA } from "@/src/lib/resumeData";
import SocialContainer from "./UI-Elements/SocialContainer";
import ContactCard from "./UI-Elements/ContactCard";
import SiteButton from "./UI-Elements/SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ResumeModal from "./Modals/ResumeModal";
import CalendlyButton from "./UI-Elements/CalendlyButton";

export const Footer = () => {
  const { showModal } = useModal();
  return (
    <section
      className="Footer flex flex-col items-center gap-10 border-t border-t-gray-800 bg-black px-5 py-10 shadow-secondaryBright xs:px-20 md:flex-row md:items-start lg:gap-20"
      id="contact-section"
    >
      <ContactCard />
      <div className="FooterRightContainer flex w-full flex-col items-center md:items-start">
        <div className="SocialContainer w-fit">
          <p className="SocialTitle text-gradient-clip text-semibold mb-2 w-full text-center text-lg uppercase tracking-wide text-white md:text-start">
            Social
          </p>
          <SocialContainer />
        </div>
        <p className="FooterMessage mt-2 max-w-[350px] text-center text-gray-400 md:text-start">
          {`Let's connect! Feel free to contact me for work, questions, or just to network!`}
        </p>
        <div className="ButtonContainer my-6 flex flex-col items-center gap-4 mini:flex-row">
          <SiteButton
            size="large"
            textColor="text-secondary"
            style="purpleHollow"
            onClick={() => showModal(<ResumeModal />)}
          >
            View Resume
          </SiteButton>
          <CalendlyButton />
        </div>
      </div>
    </section>
  );
};
