"use client";
import React from "react";
import "./Header.css";
import SocialContainer from "../SocialContainer/SocialContainer";
import { ParticlesAnimation } from "../ParticlesAnimation/ParticlesAnimation";

export const Header = () => {
  const performSmoothScroll = () => {
    document
      .querySelector("#about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="_header-container relative h-dvh" id="header-section">
      <section className="_particles-background pb-25 absolute z-[-10] h-[116vh] w-full text-center">
        <ParticlesAnimation />
      </section>
      <div className="_header-text-container mx-auto flex flex-col items-center pt-[15vh] sm:pt-[30vh]">
        <div
          className="_text-container flex max-w-[80%] flex-col items-center rounded-[20px] bg-black/5 
        px-8 py-20 opacity-90 shadow-custom backdrop-blur-md md:px-20 md:py-20 lg:py-28"
        >
          <h1
            className="_title mb-4 text-center font-serif text-5xl font-medium uppercase leading-tight text-white
           sm:text-nowrap sm:pb-0 sm:text-6xl lg:text-7xl"
          >
            Joshua Duncan
          </h1>
          <h2 className="_description mb-6 mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
            Software Engineer
          </h2>
          <div className="_social-container">
            <SocialContainer />
          </div>
        </div>
        <div className="_scroll mt-[6vh] flex flex-col items-center">
          <h3
            className="_scroll-down global__hover-animation font-serif text-xl font-bold italic text-white"
            onClick={performSmoothScroll}
          >
            (Scroll Down)
          </h3>
          <button
            aria-label="scroll down"
            onClick={performSmoothScroll}
            className="_down-arrow global__hover-animation relative mt-4 h-10 w-10 border-none"
            id="nav-trigger"
          ></button>
        </div>
      </div>
    </div>
  );
};
