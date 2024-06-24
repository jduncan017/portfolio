import { BackgroundGradient } from "../UILibraries/background-gradient";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";

type DisplayCardProps = {
  cardData: CardData;
};

export default function DisplayCard({ cardData }: DisplayCardProps) {
  console.log(cardData);
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
          className="Image mb-2 aspect-video w-full rounded-lg"
        />
      );
    } else {
      return (
        <Image
          className="cardDataImage pointer-events-none mb-2 aspect-video w-full rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover"
          src={cardData.imagePath}
          alt="Screenshot of cardData"
          width={456}
          height={239}
        />
      );
    }
  };

  return (
    <BackgroundGradient
      containerClassName="Container mx-auto p-0.5 hover:scale-105 transition-all duration-500 w-[92%] xs:w-[96%] hover:opacity-100 xs:opacity-70"
      className="Card flex h-full flex-col items-center gap-2 rounded-[12px] bg-gray-900 p-4 text-orange-200 transition-all duration-500 hover:bg-gray-900 hover:text-orange-200 hover:saturate-100 xs:bg-blurWhite xs:p-3 xs:text-black xs:saturate-0 xl:p-4"
    >
      <div className="TitleSection flex flex-col items-center">
        <h3 className="Title pointer-events-none w-full text-center text-xl font-semibold uppercase tracking-wider xs:text-lg xl:text-xl">
          {cardData.name}
        </h3>
        <p className="LastUpdated mb-2 text-xs italic text-gray-400">
          {`Last Updated: ${cardData.lastUpdated}`}
        </p>
      </div>
      {cardImage()}
      <div className="TagsContainer mb-2 flex w-full flex-wrap gap-2">
        {cardData.tags &&
          cardData.tags.sort().map((tag: string): ReactNode => {
            return (
              <div
                className="Tag pointer-events-none flex-grow rounded-md bg-gray-700 bg-opacity-70 p-1 text-center text-orange-200"
                key={tag}
              >
                {tag}
              </div>
            );
          })}
      </div>
      <p className="Description pointer-events-none my-2 h-16 w-full text-center font-[Muli] text-xl capitalize leading-5 xs:h-20 xs:text-lg xs:leading-6 xl:h-16">
        {cardData.shortDescription}
      </p>
      <Link
        href={cardData.liveLink}
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-label="live project"
        target="_blank"
        className="ImageLink my-4 w-fit rounded-md border border-solid border-orange-300 px-4 py-1.5 text-center font-medium uppercase tracking-widest text-orange-200 transition-all duration-500 hover:bg-orange-200 hover:text-black"
      >
        {cardData.liveButtonText}
      </Link>
    </BackgroundGradient>
  );
}
