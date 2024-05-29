import React from "react";
import Link from "next/link";
import { PROJECT_DATA } from "@/src/lib/projectData";
import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects-section" className="_projects-wrapper">
      <div
        id="projects-section"
        className="_projects-outer-container flex w-full flex-col items-center bg-lightGrey pb-12 pt-24"
      >
        <div className="_projects__header-section mb-5 w-[80%]">
          <div className="_projects__bottom-border w-fit border-b-2 border-solid border-[#8913e1]">
            <h1 className="_projects__header self-start text-lg font-semibold uppercase tracking-widest">
              Recent Projects
            </h1>
          </div>
        </div>
        {PROJECT_DATA.map((project) => (
          <div
            key={project.name}
            className="_project-container mb-7 flex w-[85%] flex-wrap items-start gap-7 rounded-2xl bg-white 
          p-5 shadow-[5px_10px_18px_#bbbbbb] md:flex-nowrap"
          >
            <Link
              href={project.liveLink}
              rel="noopener noreferrer"
              tabIndex="-1"
              aria-label="live project"
              target="_blank"
            >
              <Image
                src={project.previewPath}
                alt="Screenshot of project"
                width={560}
                height={280}
                className="_project__site-preview h-auto w-[83vw] cursor-pointer rounded-lg transition-filter duration-500 hover:brightness-125 hover:contrast-50 md:h-[190px] md:w-auto md:max-w-[300px]"
              />
            </Link>
            <div className="_project-info flex flex-col">
              <h3 className="_project-title mb-2 text-xl">{project.name}</h3>
              <i className="_project-techs font-[Muli] text-lg">
                {project.techsUsed}
              </i>
              <p className="_project-description mt-2 font-[Muli] text-base leading-6 tracking-normal">
                {project.description}
              </p>
              <div className="_project-buttons-container mt-2 flex flex-wrap gap-2.5">
                <Link
                  href={project.liveLink}
                  rel="noopener noreferrer"
                  tabIndex="-1"
                  aria-label="live project"
                  target="_blank"
                >
                  <button
                    className="_project-button my-1.5 h-10 cursor-pointer rounded-full border-2 
                border-[#5e00a4] bg-white px-5 text-sm text-black transition-all duration-300 
                hover:bg-[#5e00a4] hover:text-white"
                  >
                    Visit Site
                  </button>
                </Link>
                {project.repoURL && (
                  <Link
                    href={project.repoURL}
                    rel="noopener noreferrer"
                    tabIndex="-1"
                    aria-label="github project repo"
                    target="_blank"
                  >
                    <button
                      className="_project-button my-1.5 h-10 cursor-pointer rounded-full border-2
                 border-[#5e00a4] bg-white px-5 text-sm text-black transition-all duration-300
                  hover:bg-[#5e00a4] hover:text-white"
                    >
                      GitHub Repo
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="_clip-path-bottom mb-[-80px] h-20 w-full bg-lightGrey"
        style={{ clipPath: "polygon(0% 0%, 100% -50%, 100% 100%)" }}
      ></div>
    </section>
  );
};
