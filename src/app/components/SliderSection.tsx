import { useState, useEffect, useCallback } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BackgroundGradient } from "./UI-Libraries/background-gradient";
import DisplayCard from "./UI-Elements/DisplayCard";
import DisplayListModal from "@/src/app/components/Modals/DisplayListModal";
import { CardData } from "@/src/lib/dataTypes";
import { useModal } from "@/src/contexts/ModalContext";

type SliderSectionProps = {
  cardArray: CardData[];
  id: string;
  title: string;
  dataType: "projects" | "technologies";
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1100 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1100, min: 850 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

export default function SliderSection({
  cardArray,
  id,
  title,
  dataType,
}: SliderSectionProps) {
  const [centerMode, setCenterMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const { showModal } = useModal();

  // sets center mode based on screen width
  useEffect(() => {
    setCenterMode(window.innerWidth > 550);
    const handleResize = () => {
      setCenterMode(window.innerWidth > 550);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //sets delay for autoplay after user interaction
  const handleUserInteraction = useCallback(() => {
    if (autoPlay) {
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 8000);
    }
  }, [autoPlay]);

  //listener for user interaction
  useEffect(() => {
    const carouselElement = document.querySelector(
      `#${id} .react-multi-carousel-list`,
    );
    if (carouselElement) {
      carouselElement.addEventListener("mousedown", handleUserInteraction);
      carouselElement.addEventListener("touchstart", handleUserInteraction);
    }
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("mousedown", handleUserInteraction);
        carouselElement.removeEventListener(
          "touchstart",
          handleUserInteraction,
        );
      }
    };
  }, [id, handleUserInteraction]);

  return (
    <section
      className="SliderSection flex scroll-mt-20 flex-col items-center"
      id={id}
    >
      <div className="TitleContainer mb-4 flex w-[90%] flex-col items-start gap-2 sm:flex-row sm:items-end sm:gap-4">
        <h1 className="Title text-start text-3xl font-semibold uppercase tracking-widest text-white md:text-4xl">
          {title}
        </h1>
        <button
          onClick={() =>
            showModal(
              <DisplayListModal cardArray={cardArray} dataType={dataType} />,
            )
          }
          className="ShowAllButton text-lg italic text-gray-400 transition-all duration-500 hover:scale-105 hover:text-themePurple md:text-xl"
        >
          View All
        </button>
      </div>
      <BackgroundGradient containerClassName="CarouselTrack w-[105%] rounded-xl p-1">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true}
          infinite={true}
          autoPlay={autoPlay}
          keyBoardControl={true}
          customTransition="transform 500ms ease"
          transitionDuration={500}
          containerClass="py-8 xs:py-8 bg-black sm:bg-blurBlack rounded-xl"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="project-item gap-10"
          centerMode={centerMode}
          rtl={false}
        >
          {cardArray.map((cardData: CardData) => (
            <DisplayCard
              key={cardData.name}
              cardData={cardData}
              dataType={dataType}
            />
          ))}
        </Carousel>
      </BackgroundGradient>
    </section>
  );
}
