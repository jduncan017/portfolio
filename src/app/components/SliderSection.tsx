"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BackgroundGradient } from "./UI-Libraries/background-gradient";
import DisplayCard from "./UI-Elements/DisplayCard";
import DisplayListModal from "@/src/app/components/Modals/DisplayListModal";
import { CardData } from "@/src/lib/dataTypes";
import { useModal } from "@/src/contexts/ModalContext";
import SectionTitle from "./UI-Elements/SectionTitle";
import { motion, useAnimation } from "framer-motion";

type SliderSectionProps = {
  cardArray: CardData[];
  id: string;
  title: string;
  dataType: "projects" | "technologies";
};

const responsive = {
  ultraWideScreen: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  wideScreen: {
    breakpoint: { max: 3000, min: 2000 },
    items: 5,
  },
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 1700 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1100 },
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

// Needed to use custom intersection observer to force reanimation of
// cards on screen resize
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      entry && setIsIntersecting(entry.isIntersecting);
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
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
  const controls = useAnimation();
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.1 });
  const [cardAnimation, setCardAnimation] = useState({ y: "", opacity: 0 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: cardAnimation,
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        stiffness: 100,
        damping: 15,
        mass: 1.2,
      },
    },
  };

  // sets the animation and centermode based on screen width
  useEffect(() => {
    const handleResize = () => {
      setCenterMode(window.innerWidth > 550);
      setCardAnimation(
        window.innerWidth > 850
          ? { y: "500px", opacity: 0 }
          : { y: "", opacity: 0 },
      );
    };

    if (typeof window !== "undefined") {
      handleResize(); // Call once to set initial state
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    <section className="SliderSection flex scroll-mt-20 flex-col" id={id}>
      <div className="TitleContainer mb-4 ml-[5%] flex flex-col items-start xs:flex-row xs:items-end xs:gap-4">
        <SectionTitle title={title} />
        <motion.button
          className="ShowAllButton pr-2 text-lg italic text-gray-400 transition-all duration-500 hover:scale-105 hover:text-secondary md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          onClick={() =>
            showModal(
              <DisplayListModal cardArray={cardArray} dataType={dataType} />,
            )
          }
        >
          View All
        </motion.button>
      </div>
      <BackgroundGradient containerClassName="CarouselTrack min-h-[400px] self-center w-[105%] rounded-xl p-[1px]">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          viewport={{ once: true }}
        >
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
            containerClass="py-8 xs:py-8 bg-offBlack rounded-xl min-h-[400px]"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="project-item gap-10"
            centerMode={centerMode}
            rtl={false}
          >
            {cardArray.map((cardData: CardData) => (
              <motion.div key={cardData.name} variants={cardVariants}>
                <DisplayCard cardData={cardData} />
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </BackgroundGradient>
    </section>
  );
}
