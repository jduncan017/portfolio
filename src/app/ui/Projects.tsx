import React from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { PROJECT_DATA } from "@/src/lib/projectData";
import Image from "next/image";
import { BackgroundGradient } from "./UILibraries/background-gradient";

export const Projects = () => {
  return (
    <section id="projects-section" className="ProjectsWrapper px-10">
      <div
        id="projects-section"
        className="OuterContainer flex w-full flex-col items-center pb-12 pt-12 "
      >
        <div className="HeaderSection mb-5 w-[80%]">
          <div className="BottomBorder w-fit">
            <h1 className="Header w-fit self-start border-b-2 border-solid border-[#8913e1] text-3xl font-semibold uppercase tracking-widest text-white">
              Recent Projects
            </h1>
          </div>
        </div>
        <div className="ProjectsContainer mt-8 grid h-fit w-[80vw] auto-cols-max justify-center gap-10 rounded-2xl bg-blurBlack p-10">
          {PROJECT_DATA.map((project) => (
            <Link
              key={project.name}
              href={project.liveLink}
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-label="live project"
              target="_blank"
              className="ImageLink"
            >
              <BackgroundGradient
                className="ProjectInnerDiv flex h-full flex-col items-start gap-2 rounded-[12px] bg-gray-950 bg-opacity-90 p-6 text-white saturate-0 transition-all duration-500 hover:bg-blurBlack hover:saturate-100"
                containerClassName="ProjectContainer p-1 hover:scale-105 transition-all duration-500 w-[420px]"
              >
                <h3 className="Title mb-2 w-full text-center text-2xl uppercase text-orange-200">
                  {project.name}
                </h3>
                <Image
                  className="ProjectImage aspect-video w-full cursor-pointer rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-900 object-cover opacity-75"
                  src={project.imagePath}
                  alt="Screenshot of project"
                  width={456}
                  height={239}
                />
                <div className="ProjectInfo flex h-full w-full flex-col text-gray-500">
                  <div className="TagsContainer mb-2 flex flex-wrap gap-2">
                    {project.tags &&
                      project.tags.sort().map((tag): ReactNode => {
                        return (
                          <div
                            className="Tag flex-grow rounded-md bg-gray-800 p-1.5 text-center"
                            key={tag}
                          >
                            {tag}
                          </div>
                        );
                      })}
                  </div>
                  <p className="Description my-2 w-full text-center font-[Muli] text-lg capitalize leading-6 text-gray-400">
                    {project.shortDescription}
                  </p>
                  {/* <i className="TechUsed font-[Muli] text-lg">
                  {project.techsUsed}
                  </i> */}
                  <button className="ViewMore p-2 text-center uppercase tracking-widest text-orange-200 opacity-80">
                    {project.liveButtonText}
                  </button>
                  {/* <div className="ButtonsContainer mt-2 flex flex-wrap gap-2.5">
                  <Link
                    href={project.liveLink}
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-label="live project"
                    target="_blank"
                  >
                    <button
                      className="ProjectButton my-1.5 h-10 cursor-pointer rounded-full border-2 
                border-[#5e00a4] bg-white px-5 text-sm text-black transition-all duration-300 
                hover:bg-[#5e00a4] hover:text-white"
                    >
                      {project.liveButtonText}
                    </button>
                  </Link>
                  {project.repoURL && (
                    <Link
                      href={project.repoURL}
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      aria-label="github project repo"
                      target="_blank"
                    >
                      <button
                        className="ProjectButton my-1.5 h-10 cursor-pointer rounded-full border-2
                 border-[#5e00a4] bg-white px-5 text-sm text-black transition-all duration-300
                  hover:bg-[#5e00a4] hover:text-white"
                      >
                        GitHub Repo
                      </button>
                    </Link>
                  )}
                </div> */}
                </div>
              </BackgroundGradient>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
