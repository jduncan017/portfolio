"use client";
import React, { useState, useEffect } from "react";
import "./Header.css";
import SocialContainer from "../SocialContainer/SocialContainer";

export const Header = (Loaded) => {
  const [headerLoaded, setHeaderLoaded] = useState(false);

  const performSmoothScroll = () => {
    document
      .querySelector("#about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  // initiates effects on component load
  useEffect(() => {
    setHeaderLoaded(true);
  }, []);

  return (
    <div
      className={`_header-container relative h-dvh transition-all duration-1000 ${!headerLoaded && "opacity-0"}`}
      id="header-section"
    >
      <div className="_header-text-container mx-auto flex flex-col items-center pt-[25vh] sm:pt-[35vh]">
        <h1 className="_title px-20 pb-4 text-center font-serif text-6xl font-medium uppercase leading-normal text-white sm:text-nowrap sm:pb-0 lg:text-7xl">
          Joshua Duncan
        </h1>
        <h2 className="_description mb-10 mt-1 font-serif text-3xl font-bold text-white">
          Software Engineer
        </h2>
        <div className="_social-container">
          <SocialContainer />
        </div>
        <div className="_scroll mt-[20vh] flex flex-col items-center">
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
