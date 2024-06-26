import ModalWrapper from "./modalWrapper";
import SiteButton from "../UI-Elements/SiteButton";
import { useModal } from "../../../contexts/ModalContext";
import type { CardData } from "@/src/lib/dataTypes";
import Link from "next/link";

type LinkModalProps = {
  cardData: CardData;
};

export default function ExternalLinkModal({ cardData }: LinkModalProps) {
  const { hideModal } = useModal();

  return (
    <ModalWrapper>
      <div className="ModalContainer flex h-fit w-fit flex-col items-center gap-4 rounded-2xl p-5 px-8 py-3 text-center font-serif">
        <h3 className="Header text-2xl font-medium uppercase text-darkTeal">
          Note:
        </h3>
        <p className="Description text-xl text-gray-300">
          {`This will take you to the ${cardData.name} website.`}
        </p>
        <div className="ButtonContainer flex h-fit w-full flex-col items-center sm:flex-row sm:gap-4">
          <SiteButton
            onSubmit={() => hideModal()}
            size="lg"
            aria="submit"
            addClasses="mt-4"
            textColor="text-gray-200"
            style="teal"
          >
            Nevermind
          </SiteButton>
          <Link
            href={cardData.liveLink}
            rel="noopener noreferrer"
            aria-label="visit site"
            target="_blank"
          >
            <SiteButton
              onSubmit={() => hideModal()}
              size="lg"
              aria="submit"
              addClasses="mt-4"
              textColor="text-gray-200"
              style="teal"
            >
              {`Let's Go!`}
            </SiteButton>
          </Link>
        </div>
      </div>
    </ModalWrapper>
  );
}
