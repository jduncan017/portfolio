import Image from "next/image";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";
import SiteButton from "./SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ProjectModal from "../Modals/ProjectModal";
import ExternalLinkModal from "../Modals/externalLinkModal";

type DisplayCardProps = {
  cardData: CardData;
  dataType: "projects" | "technologies";
};

export default function DisplayCard({ cardData, dataType }: DisplayCardProps) {
  let cardButton: ReactNode;
  const { showModal } = useModal();
  const isURL = (path: string) => {
    try {
      new URL(path);
      return true;
    } catch {
      return false;
    }
  };

  switch (dataType) {
    case "projects":
      cardButton = (
        <SiteButton
          size="small"
          aria={`View Project`}
          addClasses="tracking-widest font-medium uppercase sm:text-xs my-2"
          textColor="text-gray-300"
          onClick={() => showModal(<ProjectModal cardData={cardData} />)}
          style="orange"
        >
          View Project
        </SiteButton>
      );
      break;
    case "technologies":
      cardButton = (
        <SiteButton
          size="small"
          aria={`View`}
          addClasses="tracking-widest font-medium uppercase sm:text-xs my-2"
          textColor="text-gray-300"
          style="orange"
          onClick={() =>
            showModal(
              <ExternalLinkModal
                name={cardData.name}
                link={cardData.liveLink}
                linkType="website"
              />,
            )
          }
        >
          {cardData.liveButtonText}
        </SiteButton>
      );
      break;
  }

  const cardImage = () => {
    if (isURL(cardData.imagePath)) {
      return (
        <ImageLoadingWrapper
          cardData={cardData}
          className="Image pointer-events-none mt-2 aspect-video w-full rounded-md border border-gray-800"
        />
      );
    } else {
      return (
        <Image
          className="cardDataImage pointer-events-none mt-2 aspect-video w-full rounded-md border border-gray-800 bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover"
          src={cardData.imagePath}
          alt="Screenshot of cardData"
          width={456}
          height={239}
        />
      );
    }
  };

  return (
    <div className="Card mx-auto flex h-full w-[88%] flex-col items-start gap-1 rounded-lg border border-slate-800 bg-gray-950 p-4 text-orange-200 transition-all duration-500 xs:w-[96%] xs:bg-black xs:p-3 xs:text-gray-700 xs:saturate-0 sm:hover:scale-105 sm:hover:bg-gray-950 sm:hover:text-orange-200 sm:hover:opacity-100 sm:hover:shadow-customBright sm:hover:saturate-100 xl:p-4">
      {cardImage()}
      <div className="TagsContainer my-2 flex w-full flex-wrap gap-1">
        {cardData.tags &&
          cardData.tags.sort().map((tag: string): ReactNode => {
            return (
              <div
                className="Tag pointer-events-none flex-grow rounded-md bg-gray-600/50 bg-opacity-70 px-2 py-0.5 text-center text-xs text-gray-300 xs:text-sm"
                key={tag}
              >
                {tag}
              </div>
            );
          })}
      </div>
      <h3 className="Title pointer-events-none w-full text-start text-xl font-bold xs:text-lg xl:text-2xl">
        {cardData.name}
      </h3>
      <p className="Description pointer-events-none h-16 w-full text-start font-sans text-sm text-gray-300 mini:leading-5 xs:h-16">
        {cardData.shortDescription}
      </p>
      {cardButton}
    </div>
  );
}
