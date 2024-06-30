import ModalWrapper from "./modalWrapper";
import SiteButton from "../UI-Elements/SiteButton";
import { useModal } from "../../../contexts/ModalContext";
import Link from "next/link";
import type { ReactNode } from "react";

type LinkModalProps = {
  name: string;
  link: string;
  currentModal?: ReactNode;
  linkType: "repository" | "website";
};

export default function ExternalLinkModal({
  name,
  link,
  currentModal,
  linkType,
}: LinkModalProps) {
  const { hideModal, showModal } = useModal();

  const handleModal = () => {
    if (currentModal) {
      showModal(currentModal);
    } else {
      hideModal();
    }
  };

  return (
    <ModalWrapper>
      <div className="ModalContainer flex h-fit w-fit flex-col items-center gap-4 rounded-2xl px-8 pb-5 text-center font-serif">
        <h3 className="Header font-sans text-2xl font-black uppercase text-darkTeal">
          Note:
        </h3>
        <p className="Description font-sans text-xl text-gray-300">
          {`This will take you to the ${name} ${linkType}.`}
        </p>
        <div className="ButtonContainer flex h-fit w-full flex-col items-center sm:flex-row sm:gap-4">
          <Link
            href={link}
            rel="noopener noreferrer"
            aria-label={`Visit ${name}`}
            target="_blank"
          >
            <SiteButton
              onClick={() => handleModal()}
              addClasses="mt-4"
              textColor="text-gray-200 uppercase"
              style="tealHollow"
            >
              {`Let's Go!`}
            </SiteButton>
          </Link>
          <SiteButton
            onClick={() => handleModal()}
            aria="go back"
            addClasses="mt-4"
            textColor="text-gray-200 uppercase"
            style="teal"
          >
            Go Back
          </SiteButton>
        </div>
      </div>
    </ModalWrapper>
  );
}
