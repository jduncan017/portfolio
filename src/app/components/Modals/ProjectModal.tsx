import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";
import SiteButton from "../UI-Elements/SiteButton";
import ModalWrapper from "./modalWrapper";

type ProjectModalProps = {
  cardData: CardData;
};

export default function ProjectModal({ cardData }: ProjectModalProps) {
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
    <ModalWrapper>
      <div className="ProjectModal flex h-full flex-col items-start gap-2 p-2 text-darkTeal">
        <div className="TitleSection flex w-full flex-col items-start">
          <h3 className="Title pointer-events-none mb-2 w-full border-b border-dotted border-gray-400 pb-1 text-start text-3xl font-semibold uppercase tracking-wider xs:text-4xl">
            {cardData.name}
          </h3>
          <p className="LastUpdated mb-2 text-sm italic text-gray-400">
            {`Last updated: ${cardData.lastUpdated}`}
          </p>
        </div>
        {cardImage()}
        <div className="TagsContainer mb-2 flex w-full flex-wrap gap-2">
          {cardData.tags &&
            cardData.tags.sort().map((tag: string): ReactNode => {
              return (
                <div
                  className="Tag flex-grow rounded-sm bg-gray-700 bg-opacity-70 p-1.5 text-center text-gray-400 xs:text-sm"
                  key={tag}
                >
                  {tag}
                </div>
              );
            })}
        </div>
        <p className="Description max-w-[550px] text-start font-sans text-gray-300">
          {cardData.description}
        </p>
        <Link
          href={cardData.liveLink}
          rel="noopener noreferrer"
          aria-label="live project"
          target="_blank"
          className="ImageLink mt-4 w-full"
        >
          <SiteButton
            size="large"
            aria={`Visit ${cardData.name}`}
            addClasses="tracking-widest uppercase w-full"
            textColor="text-gray-300"
            style="teal"
          >
            {cardData.liveButtonText}
          </SiteButton>
        </Link>
      </div>
    </ModalWrapper>
  );
}