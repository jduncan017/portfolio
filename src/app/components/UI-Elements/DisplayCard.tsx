import Image from "next/image";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";
import SiteButton from "./SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ProjectModal from "../Modals/ProjectModal";

type DisplayCardProps = {
  cardData: CardData;
};

export default function DisplayCard({ cardData }: DisplayCardProps) {
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
    <div className="Card mx-auto flex h-full w-[88%] max-w-[420px] flex-col items-start gap-1 rounded-lg border border-white/30 bg-gray-950 p-4 shadow-secondaryDim transition-all duration-500 xs:w-[96%] xs:border-secondary/60 xs:bg-black xs:p-3 xs:text-gray-300 xs:saturate-0 xs:hover:-translate-y-5 xs:hover:bg-gray-950 xs:hover:opacity-100 xs:hover:shadow-secondaryBright xs:hover:saturate-100 sm:border-secondary/30 sm:shadow-none xl:p-4">
      {cardImage()}
      {cardData.tags && (
        <ul className="TagsContainer mt-2 flex w-full flex-wrap gap-2">
          {cardData.tags.sort().map((tag: string): ReactNode => {
            return (
              <li
                className="Tag pointer-events-none flex-grow rounded-sm bg-secondaryDark/40 px-2 py-1 text-center text-sm text-gray-400"
                key={tag}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      )}
      <h3 className="Title text-gradient-clip pointer-events-none mt-2 w-full text-start font-serif text-2xl font-bold uppercase xs:text-xl xl:text-2xl">
        {cardData.name}
      </h3>
      <p className="Description pointer-events-none h-16 w-full text-start leading-5 text-gray-400 xs:h-16">
        {cardData.description}
      </p>
      <SiteButton
        size="small"
        aria={`View Project`}
        addClasses="tracking-widest font-medium my-2"
        textColor="text-black"
        onClick={() => showModal(<ProjectModal cardData={cardData} />)}
        style="purple"
      >
        View Project
      </SiteButton>
    </div>
  );
}
