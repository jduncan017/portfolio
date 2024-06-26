"use client";
import React, { useState, useEffect } from "react";
import "./Header.css";
import SocialContainer from "../UI-Elements/SocialContainer";
import { ParticlesAnimation } from "../UI-Libraries/ParticlesAnimation/ParticlesAnimation";
import Image from "next/image";

export const Header = () => {
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setSectionHeight(window.innerHeight);
    };

    updateHeight(); // Set initial height
  }, []);

  const performSmoothScroll = () => {
    const aboutSection = document.querySelector("#about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section does not exist!");
    }
  };

  return (
    <section
      style={{ height: `${sectionHeight}px`, maxHeight: "1200px" }}
      className="HeaderContainer relative"
      id="header-section"
    >
      <div className="_particles-background pb-25 absolute z-[-10] h-svh w-full text-center">
        <ParticlesAnimation />
      </div>
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
          <Image
            width={40}
            height={40}
            src={"/down-arrow.png"}
            alt="scroll down"
            aria-label="scroll down"
            onClick={performSmoothScroll}
            className="_down-arrow global__hover-animation relative mt-4 h-10 w-10 border-none delay-300"
            id="nav-trigger"
          ></Image>
        </div>
      </div>
    </section>
  );
};
