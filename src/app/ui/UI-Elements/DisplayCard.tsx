import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";
import SiteButton from "./SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ProjectModal from "../Modals/ProjectModal";

type DisplayCardProps = {
  cardData: CardData;
  dataType: "project" | "technology";
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
    case "project":
      cardButton = (
        <SiteButton
          size="small"
          aria={`View Project`}
          addClasses="tracking-widest font-medium sm:text-sm uppercase"
          textColor="text-gray-300"
          onSubmit={() => showModal(<ProjectModal cardData={cardData} />)}
          style="orange"
        >
          View Project
        </SiteButton>
      );
      break;
    case "technology":
      cardButton = (
        <Link
          href={cardData.liveLink}
          rel="noopener noreferrer"
          aria-label="visit site"
          target="_blank"
        >
          <SiteButton
            size="small"
            aria={`View Project`}
            addClasses="tracking-widest font-medium sm:text-sm uppercase"
            textColor="text-gray-300"
            style="orange"
          >
            {cardData.liveButtonText}
          </SiteButton>
        </Link>
      );
      break;
  }

  const cardImage = () => {
    if (isURL(cardData.imagePath)) {
      return (
        <ImageLoadingWrapper
          cardData={cardData}
          className="Image pointer-events-none aspect-video w-full rounded-sm"
        />
      );
    } else {
      return (
        <Image
          className="cardDataImage pointer-events-none aspect-video w-full rounded-sm bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover"
          src={cardData.imagePath}
          alt="Screenshot of cardData"
          width={456}
          height={239}
        />
      );
    }
  };

  return (
    <div className="Card shadow-customBright mx-auto flex h-full w-[92%] flex-col items-center gap-2 rounded-lg bg-gray-950 p-4 text-orange-200 transition-all duration-500 xs:w-[96%] xs:bg-black/90 xs:p-3 xs:text-gray-700 xs:saturate-0 sm:hover:scale-105 sm:hover:bg-slate-950 sm:hover:text-orange-200 sm:hover:opacity-100 sm:hover:shadow-themeBright sm:hover:saturate-100 xl:p-4">
      <div className="TitleSection flex flex-col items-center">
        <h3 className="Title pointer-events-none w-full text-center text-xl font-semibold uppercase tracking-wider xs:text-lg xl:text-xl">
          {cardData.name}
        </h3>
        <p className="LastUpdated mb-2 text-xs italic text-gray-400">
          {`Last updated: ${cardData.lastUpdated}`}
        </p>
      </div>
      {cardImage()}
      <div className="TagsContainer mb-2 flex w-full flex-wrap gap-2">
        {cardData.tags &&
          cardData.tags.sort().map((tag: string): ReactNode => {
            return (
              <div
                className="Tag pointer-events-none flex-grow rounded-sm bg-gray-700 bg-opacity-70 p-1.5 text-center text-gray-400 xs:text-sm"
                key={tag}
              >
                {tag}
              </div>
            );
          })}
      </div>
      <p className="Description pointer-events-none h-16 w-full text-center font-sans text-lg capitalize leading-5 text-gray-300 xs:h-20 sm:text-base xl:h-20">
        {cardData.shortDescription}
      </p>
      {cardButton}
    </div>
  );
}
