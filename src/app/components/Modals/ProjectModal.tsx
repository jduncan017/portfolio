import Image from "next/image";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";
import SiteButton from "../UI-Elements/SiteButton";
import ModalWrapper from "./ModalWrapper";
import { useModal } from "@/src/contexts/ModalContext";
import ExternalLinkModal from "./ExternalLinkModal";

type ProjectModalProps = {
  cardData: CardData;
};

export default function ProjectModal({ cardData }: ProjectModalProps) {
  const { showModal } = useModal();
  // this had to be defined distinctly because TS wasn't picking up typesafety for the button
  const repoURL = cardData.repoURL;
  const isURL = (path: string) => {
    try {
      new URL(path);
      return true;
    } catch {
      return false;
    }
  };

  const cardImage = () => {
    if (isURL(cardData.imagePath)) {
      return (
        <ImageLoadingWrapper
          cardData={cardData}
          className="Image aspect-video w-full rounded-sm"
        />
      );
    } else {
      return (
        <Image
          className="cardDataImage pointer-events-none aspect-video w-full rounded-md border border-gray-800 bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover"
          src={cardData.imagePath}
          alt="Screenshot of cardData"
          width={456}
          height={239}
        />
      );
    }
  };

  return (
    <ModalWrapper>
      <div className="ProjectModal flex h-full w-full max-w-[450px] flex-col items-start gap-2 pb-2">
        <div className="TitleSection flex w-full flex-col items-start">
          <h3 className="Title text-gradient-clip pointer-events-none mb-2 w-full border-b border-dotted border-gray-400 pb-1 text-start font-serif text-3xl font-semibold uppercase tracking-wider xs:text-4xl">
            {cardData.name}
          </h3>
          <p className="LastUpdated mb-2 text-sm italic text-gray-400">
            {`Last updated: ${cardData.lastUpdated}`}
          </p>
        </div>
        {cardImage()}
        <div className="TechsUsedContainer mb-2 flex w-full flex-wrap gap-2">
          {cardData.techsUsed &&
            cardData.techsUsed.sort().map((tech: string): ReactNode => {
              return (
                <div
                  className="tech flex-grow rounded-sm bg-secondaryDark/40 px-2 py-1 text-center text-sm text-gray-400"
                  key={tech}
                >
                  {tech}
                </div>
              );
            })}
        </div>
        <p className="Description w-fit text-start text-sm leading-5 text-gray-300 xs:text-base">
          <span className="font-medium text-gray-400">Description: </span>
          {cardData.description}
        </p>
        <div className="ButtonContainer flex h-fit w-full flex-col items-center sm:flex-row sm:gap-4">
          <SiteButton
            size="large"
            aria-label={`Visit ${cardData.name}`}
            addClasses="tracking-widest sm:text-xs uppercase w-full mt-4"
            textColor="text-black"
            style="purple"
            onClick={() =>
              showModal(
                <ExternalLinkModal
                  name={cardData.name}
                  link={cardData.liveLink}
                  linkType="Website"
                  currentModal={<ProjectModal cardData={cardData} />}
                />,
              )
            }
          >
            {cardData.liveButtonText}
          </SiteButton>
          {repoURL && (
            <SiteButton
              aria={`github repo for ${repoURL}`}
              size="large"
              addClasses="tracking-widest sm:text-xs uppercase w-full mt-4"
              textColor="text-secondary"
              style="purpleHollow"
              onClick={() =>
                showModal(
                  <ExternalLinkModal
                    name={cardData.name}
                    link={repoURL}
                    linkType="Repository"
                    currentModal={<ProjectModal cardData={cardData} />}
                  />,
                )
              }
            >
              Source Code
            </SiteButton>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
}
