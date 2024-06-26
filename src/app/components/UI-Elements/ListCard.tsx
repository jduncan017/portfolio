import Image from "next/image";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";
import SiteButton from "./SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ExternalLinkModal from "../Modals/externalLinkModal";

type DisplayCardProps = {
  cardData: CardData;
  dataType: "projects" | "technologies";
};

export default function DisplayCard({ cardData, dataType }: DisplayCardProps) {
  const { showModal } = useModal();
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
          className="Image h-auto w-full rounded-md object-cover md:h-[110px] md:w-[210px] md:rounded-sm"
        />
      );
    } else {
      return (
        <Image
          className="cardDataImage rounded-md bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover md:h-[110px] md:w-[210px] md:rounded-sm"
          src={cardData.imagePath}
          alt="Screenshot of cardData"
          width={456}
          height={239}
        />
      );
    }
  };

  return (
    <div className="Card mx-auto flex h-fit w-full max-w-[456px] flex-col gap-2 rounded-xl bg-slate-950 px-4 py-6 text-start text-orange-200 shadow-customDim transition-all duration-500 xs:px-8 sm:hover:shadow-customBright md:w-[95%] md:max-w-none md:flex-row">
      <div className="TitleImageSection mx-auto flex h-full flex-col items-center md:mx-0 md:w-[350px] md:items-start">
        <h3 className="Title text-center text-lg font-semibold uppercase tracking-wider xs:text-2xl md:text-xl">
          {cardData.name}
        </h3>
        <p className="LastUpdated mb-2 w-full text-center text-sm italic text-gray-400 md:text-start">
          {`Last updated: ${cardData.lastUpdated}`}
        </p>
        {cardImage()}
        <SiteButton
          size="small"
          aria={`Go to site`}
          addClasses="tracking-widest font-medium sm:text-sm uppercase mt-3 w-full md:w-[210px] rounded-md"
          textColor="text-gray-300"
          style="teal"
          onSubmit={() => showModal(<ExternalLinkModal cardData={cardData} />)}
        >
          {cardData.liveButtonText}
        </SiteButton>
      </div>
      <div className="InfoContainer flex w-full flex-col items-start justify-between gap-2">
        <p className="Description w-fit text-start font-sans text-sm capitalize leading-6 text-gray-300 xs:text-base">
          {cardData.description}
        </p>
        <div className="BottomContainer flex h-fit w-fit justify-between gap-2">
          {cardData.tags &&
            cardData.tags.sort().map((tag: string): ReactNode => {
              return (
                <div
                  className="Tag flex-grow rounded-sm bg-gray-700 bg-opacity-90 p-1.5 text-center text-gray-400"
                  key={tag}
                >
                  {tag}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
