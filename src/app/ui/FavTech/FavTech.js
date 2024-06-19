"use client";
import React from "react";
import Link from "next/link";
import { FAVORITE_TECH_DATA } from "@/src/lib/favoriteTechData";
import Image from "next/image";
import "./FavTech.css";
import ImageLoadingWrapper from "@/src/utils/PreLoader/ImageLoadingWrapper";
import { BackgroundGradient } from "../UILibraries/background-gradient";

export const FavTech = () => {
  return (
    <section
      id="technologies-section"
      className="FavTechWrapper flex w-full flex-col items-center pb-12 pt-12"
    >
      <div className="HeaderSection mb-5 w-[80%]">
        <div className="BottomBorder w-fit">
          <h1 className="Header w-fit self-start border-b-2 border-solid border-[#8913e1] text-3xl font-semibold uppercase tracking-widest text-white">
            Favorite Technologies
          </h1>
        </div>
      </div>
      <div className="ProjectsContainer mt-8 flex w-[85%] flex-wrap justify-evenly gap-16">
        {FAVORITE_TECH_DATA.map((project) => {
          return (
            <BackgroundGradient
              className="ProjectInnerDiv flex h-full flex-col items-start gap-2 rounded-[18px] bg-gray-950 bg-opacity-90 p-6 text-white saturate-0 transition-all duration-500 hover:saturate-100"
              containerClassName="ProjectContainer p-0.5 hover:scale-105 transition-all duration-500 w-[420px] rounded-[18px]"
              key={project.name}
            >
              <Link
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-label="live project"
                href={project.liveLink}
                target="_blank"
                className="ItemLink"
                key={project.name}
              >
                <h3 className="Title mb-2 w-full text-center text-2xl uppercase text-orange-200">
                  {project.name}
                </h3>
                <div className="ImageContainer">
                  <ImageLoadingWrapper
                    project={project}
                    className="Image mb-2 aspect-video w-full rounded-lg"
                  />
                </div>
                <div className="InfoContainer">
                  <p className="Description mb-2 w-full font-[Muli] text-lg capitalize leading-6 text-gray-400">
                    {project.description}
                  </p>
                  <p className="ViewMore w-full p-2 text-center uppercase tracking-widest text-orange-200 opacity-80">
                    {project.liveButtonText}
                  </p>
                </div>
              </Link>
            </BackgroundGradient>
          );
        })}
      </div>
    </section>
  );
};
