import Image from "next/image";
import type { ReactNode } from "react";
import { CardData } from "@/src/lib/dataTypes";
import ImageLoadingWrapper from "../../../utils/PreLoader/ImageLoadingWrapper";
import SiteButton from "./SiteButton";
import { useModal } from "@/src/contexts/ModalContext";
import ExternalLinkModal from "../Modals/externalLinkModal";
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
          className="Image mt-2 h-auto w-full rounded-md object-cover md:h-[110px] md:w-[210px] md:rounded-sm"
        />
      );
    } else {
      return (
        <Image
          className="cardDataImage mt-2 rounded-md bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover md:h-[110px] md:w-[210px] md:rounded-sm"
          src={cardData.imagePath}
          alt="Screenshot of cardData"
          width={456}
          height={239}
        />
      );
    }
  };

  return (
    <div className="Card border-secondary/50 shadow-secondaryDim sm:hover:shadow-secondaryBright mx-auto flex h-fit w-full max-w-[456px] flex-col gap-2 rounded-xl border bg-slate-950 px-4 py-6 text-start text-orange-200 transition-all duration-500 xs:px-8 md:w-[95%] md:max-w-none xxl:max-w-[1000px]">
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
          <p className="Description w-fit text-start  text-sm capitalize leading-6 text-gray-300 xs:text-base">
            {cardData.description}
          </p>
        </div>
      </div>
      <div className="BottomContainer flex h-fit w-full flex-col items-start justify-between gap-2 md:flex-row">
        <div className="TechContainer flex w-fit flex-wrap items-start justify-start gap-2">
          {cardData.techsUsed &&
            cardData.techsUsed.sort().map((tech: string): ReactNode => {
              return (
                <div
                  className="Technology h-fit w-fit rounded-md bg-gray-600/50 bg-opacity-90 p-2 text-center text-gray-300"
                  key={tech}
                >
                  {tech}
                </div>
              );
            })}
        </div>
        <div className="ButtonContainer flex h-full w-full min-w-fit flex-col items-center text-nowrap sm:flex-row sm:gap-2 md:w-fit">
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
