"use client";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BackgroundGradient } from "@/src/app/ui/UILibraries/background-gradient";
import { PROJECT_DATA } from "@/src/lib/projectData";
import DisplayCard from "./UI-Elements/DisplayCard";

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

export default function ProjectSlider() {
  const [centerMode, setCenterMode] = useState(window.innerWidth > 520);

  useEffect(() => {
    const handleResize = () => {
      setCenterMode(window.innerWidth > 550);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ProjectSlider flex flex-col items-center">
      <h1 className="Header mb-4 w-[80%] border-solid text-start text-3xl font-semibold uppercase tracking-widest text-white md:text-4xl">
        Recent Projects
      </h1>
      <BackgroundGradient containerClassName="CarouselTrack w-[95%] xs:w-[105%] rounded-xl">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          customTransition="transform 500ms ease"
          transitionDuration={500}
          containerClass="py-4 xs:py-8 bg-blurBlack rounded-xl"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="project-item gap-10"
          centerMode={centerMode}
        >
          {PROJECT_DATA.map((project) => (
            <DisplayCard key={project.name} project={project} />
          ))}
        </Carousel>
      </BackgroundGradient>
      ;
    </div>
  );
}
