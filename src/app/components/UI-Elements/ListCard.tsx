import Image from "next/image";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";
import SiteButton from "./SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ExternalLinkModal from "../Modals/ExternalLinkModal";
import DisplayListModal from "../Modals/DisplayListModal";

type DisplayCardProps = {
  cardData: CardData;
  cardArray: CardData[];
  dataType: "projects" | "technologies";
};

export default function DisplayCard({
  cardData,
  dataType,
  cardArray,
}: DisplayCardProps) {
  const { showModal } = useModal();
  // repoURL had to be defined distinctly because TS wasn't picking up typesafety for the button
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
          className="Image mt-2 h-auto w-full rounded-lg border border-gray-800 object-cover md:h-[110px] md:w-[210px]"
        />
      );
    } else {
      return (
        <Image
          className="cardDataImage mt-2 rounded-lg border border-gray-800 bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover md:h-[110px] md:w-[210px]"
          src={cardData.imagePath}
          alt="Screenshot of cardData"
          width={456}
          height={239}
        />
      );
    }
  };

  return (
    <div className="Card mx-auto flex h-fit w-full max-w-[456px] flex-col justify-between gap-2 rounded-lg border border-secondary/50 bg-black px-4 py-6 text-start text-orange-200 shadow-secondaryDim transition-all duration-500 hover:brightness-100 xs:px-8 sm:hover:shadow-secondaryBright md:w-[95%] md:max-w-none lg:brightness-75 xl:h-full xl:w-full xxl:max-w-[1000px]">
      <div className="TopContainer flex flex-col gap-4 md:flex-row">
        <div className="TitleImageSection mx-auto flex h-full flex-col items-center md:mx-0 md:w-[350px] md:items-start">
          <h3 className="Title font-serif text-lg font-semibold uppercase tracking-wider xs:text-2xl md:text-xl">
            {cardData.name}
          </h3>
          {cardData.lastUpdated && (
            <p className="LastUpdated w-full text-center text-sm italic text-gray-400 md:text-start">
              {`Last updated: ${cardData.lastUpdated}`}
            </p>
          )}
          {cardImage()}
        </div>
        <div className="InfoContainer flex w-full flex-col items-start justify-between gap-2">
          <p className="Description w-fit text-start text-sm leading-6 text-gray-300 xs:text-base">
            {cardData.description}
          </p>
        </div>
      </div>
      <div className="BottomContainer mt-2 flex h-fit w-full flex-col justify-between gap-2 xs:items-end md:flex-row">
        <div className="TechContainer flex w-full flex-wrap items-start justify-start gap-2 md:w-fit xl:w-[350px]">
          {cardData.techsUsed &&
            cardData.techsUsed.sort().map((tech: string): ReactNode => {
              return (
                <div
                  className="Technology h-fit w-fit flex-grow rounded-md bg-gray-600/50 bg-opacity-90 p-1 text-center text-gray-300"
                  key={tech}
                >
                  {tech}
                </div>
              );
            })}
        </div>
        <div className="ButtonContainer flex h-full w-full min-w-fit flex-col items-end text-nowrap sm:flex-row sm:gap-2 md:w-fit">
          <SiteButton
            size="small"
            addClasses="tracking-widest mt-3 md:mt-0 uppercase w-full md:w-auto"
            textColor="text-gray-300"
            style="teal"
            aria={`Visit ${cardData.name}`}
            onClick={() =>
              showModal(
                <ExternalLinkModal
                  name={cardData.name}
                  link={cardData.liveLink}
                  linkType="website"
                  currentModal={
                    <DisplayListModal
                      cardArray={cardArray}
                      dataType={dataType}
                    />
                  }
                />,
              )
            }
          >
            {cardData.liveButtonText}
          </SiteButton>
          {repoURL && (
            <SiteButton
              size="small"
              aria={`github repo for ${repoURL}`}
              addClasses="tracking-widest uppercase mt-3 md:mt-0 w-full md:w-auto"
              textColor="text-gray-300"
              style="teal"
              onClick={() =>
                showModal(
                  <ExternalLinkModal
                    name={cardData.name}
                    link={repoURL}
                    linkType="repository"
                    currentModal={
                      <DisplayListModal
                        cardArray={cardArray}
                        dataType={dataType}
                      />
                    }
                  />,
                )
              }
            >
              Source Code
            </SiteButton>
          )}
        </div>
      </div>
    </div>
  );
}
