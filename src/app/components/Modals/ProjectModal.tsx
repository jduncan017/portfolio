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
          className="cardDataImage pointer-events-none aspect-video w-full rounded-md bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover"
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
      <div className="ProjectModal flex h-full w-full max-w-[600px] flex-col items-start gap-2 pb-2">
        <div className="TitleSection flex w-full flex-col items-start">
          <h3 className="Title text-gradient-clip pointer-events-none mb-2 w-full border-b border-dotted border-secondary/50 pb-1 text-start font-serif text-3xl font-semibold uppercase tracking-wider xs:text-4xl">
            {cardData.name}
          </h3>
          <p className="LastUpdated mb-2 text-sm italic text-gray-400">
            {`Last updated: ${cardData.lastUpdated}`}
          </p>
        </div>
        {cardImage()}
        <div className="TechsUsedContainer flex w-full flex-wrap gap-2 py-1">
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
        <div className="InfoContainer flex w-full flex-col items-start gap-1">
          <p className="Description w-fit border-b border-secondary/50 pb-2 text-start text-sm leading-5 text-gray-300 xs:text-base">
            <span className="font-medium uppercase text-gray-400">
              Description:{" "}
            </span>
            {cardData.description}
          </p>
          <div className="DataContainer flex flex-wrap gap-x-3 gap-y-1 border-b border-secondary/50 pb-2 pt-1">
            <p className="Type w-fit text-start text-sm leading-5 text-gray-300 xs:text-base">
              <span className="font-medium uppercase text-gray-400">
                Type:{" "}
              </span>
              {cardData.type}
            </p>
            {cardData.role && (
              <p className="Role w-fit text-start text-sm leading-5 text-gray-300 xs:text-base">
                <span className="font-medium uppercase text-gray-400">
                  Role:{" "}
                </span>
                {cardData.role}
              </p>
            )}
            {cardData.stage && (
              <p className="Stage w-fit text-start text-sm leading-5 text-gray-300 xs:text-base">
                <span className="font-medium uppercase text-gray-400">
                  Stage:{" "}
                </span>
                {cardData.stage}
              </p>
            )}
          </div>
          {cardData.keyFeatures && (
            <p className="KeyFeatures w-fit text-start text-sm leading-5 text-gray-300 xs:text-base">
              <span className="font-medium uppercase text-gray-400">
                Key Features:{" "}
              </span>
              {cardData.keyFeatures.map((feature: string): ReactNode => {
                return (
                  <div
                    className="Keyfeature capitalize text-gray-300"
                    key={feature}
                  >
                    <span className="Arrow text-gray-400">{`-> `}</span>
                    {feature}
                  </div>
                );
              })}
            </p>
          )}
        </div>
        <div className="ButtonContainer flex h-fit w-full flex-col items-center sm:flex-row sm:gap-4">
          <SiteButton
            size="large"
            aria-label={`Visit ${cardData.name}`}
            addClasses="tracking-widest sm:text-xs flex-grow uppercase w-full mt-4"
            textColor="text-black"
            style="purple"
            onClick={() =>
              showModal(
                <ExternalLinkModal
                  cardData={cardData}
                  linkType="website"
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
              addClasses="tracking-widest sm:text-xs uppercase w-fit mt-4"
              textColor="text-secondary"
              style="purpleHollow"
              onClick={() =>
                showModal(
                  <ExternalLinkModal
                    cardData={cardData}
                    linkType="repository"
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
