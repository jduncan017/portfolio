import ModalWrapper from "./ModalWrapper";
import SiteButton from "../UI-Elements/SiteButton";
import { useModal } from "../../../contexts/ModalContext";
import Link from "next/link";
import type { CardData } from "@/src/lib/dataTypes";
import type { ReactNode } from "react";

type LinkModalProps = {
  cardData: CardData;
  currentModal?: ReactNode;
  linkType: "repository" | "website";
};

export default function ExternalLinkModal({
  cardData,
  currentModal,
  linkType,
}: LinkModalProps) {
  const { hideModal, showModal } = useModal();

  const handleModal = () => {
    if (currentModal) {
      showModal(currentModal);
    } else {
      () => hideModal();
    }
  };

  // logic for displaying text correctly
  let displayText;
  let modalTitle;
  let showLinkButton = true;

  switch (cardData.altName) {
    case "You're already here!":
      displayText = cardData.altName;
      modalTitle = "Oops!";
      showLinkButton = false;
      break;
    case undefined:
      displayText = `Are you ready to visit ${cardData.name}'s ${linkType}?`;
      modalTitle = "Note - External Link";
      break;
    default:
      displayText = `Are you ready to visit ${cardData.altName}'s ${linkType}?`;
      modalTitle = "Note - External Link";
  }

  return (
    <ModalWrapper currentModal={currentModal}>
      <div className="ModalContainer flex h-fit w-fit flex-col items-center rounded-2xl px-6 py-5 text-center font-serif">
        <h3 className="Header font-noto text-2xl font-black capitalize text-gray-400">
          {modalTitle}
        </h3>
        <p className="Description my-4 font-noto text-xl text-gray-300">
          {displayText}
        </p>
        <div className="ButtonContainer flex h-fit w-full flex-col items-center sm:flex-row sm:gap-4">
          {showLinkButton && (
            <Link
              href={cardData.liveLink}
              rel="noopener noreferrer"
              aria-label={`Visit ${cardData.name}`}
              target="_blank"
            >
              <SiteButton
                onClick={() => handleModal()}
                addClasses="mt-4"
                textColor="text-black capitalize"
                style="purple"
              >
                {`Let's Go!`}
              </SiteButton>
            </Link>
          )}
          <SiteButton
            onClick={() => handleModal()}
            aria="go back"
            addClasses="mt-4"
            textColor="text-secondary capitalize"
            style="purpleHollow"
          >
            Go Back
          </SiteButton>
        </div>
      </div>
    </ModalWrapper>
  );
}
