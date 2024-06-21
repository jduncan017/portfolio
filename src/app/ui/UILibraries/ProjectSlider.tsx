import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "./background-gradient";
import { PROJECT_DATA } from "@/src/lib/projectData";
import type { ReactNode } from "react";
import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1800, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ProjectSlider() {
  return (
    <div className="ProjectSlider flex flex-col items-center">
      <h1 className="Header mb-4 w-[80%] border-solid text-start text-4xl font-semibold uppercase tracking-widest text-white">
        Recent Projects
      </h1>
      <BackgroundGradient containerClassName="CarouselTrack w-[105%]">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="py-8 bg-blurBlack"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="project-item gap-10"
          centerMode={true}
        >
          {PROJECT_DATA.map((project) => (
            <BackgroundGradient
              className="ProjectInnerDiv flex h-full flex-col items-center gap-2 rounded-[12px] bg-blurWhite bg-opacity-90 p-6 text-black saturate-0 transition-all duration-500 hover:bg-gray-950 hover:text-orange-200 hover:saturate-100"
              containerClassName="ProjectContainer p-0.5 hover:scale-105 transition-all duration-500 w-[420px] hover:opacity-100 opacity-60"
              key={project.name}
            >
              <h3 className="Title pointer-events-none mb-2 w-full text-center text-2xl font-medium uppercase">
                {project.name}
              </h3>
              <Image
                className="ProjectImage pointer-events-none aspect-video w-full rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover"
                src={project.previewPath}
                alt="Screenshot of project"
                width={456}
                height={239}
              />
              <div className="TagsContainer mb-2 flex w-full flex-wrap gap-2">
                {project.tags.sort().map((tag: string): ReactNode => {
                  return (
                    <div
                      className="Tag pointer-events-none flex-grow rounded-md bg-gray-700 p-1.5 text-center text-orange-200"
                      key={tag}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
              <p className="Description pointer-events-none my-2 w-full text-center font-[Muli] text-lg capitalize leading-6">
                {project.shortDescription}
              </p>
              <Link
                href={project.liveLink}
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-label="live project"
                target="_blank"
                className="ImageLink w-fit text-center font-medium uppercase tracking-widest"
              >
                {project.liveButtonText}
              </Link>
            </BackgroundGradient>
          ))}
        </Carousel>
      </BackgroundGradient>
      ;
    </div>
  );
}
