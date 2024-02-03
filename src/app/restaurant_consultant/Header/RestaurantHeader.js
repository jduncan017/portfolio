"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./RestaurantHeader.css";
import image1 from "@/public/sampleImage1.png";
import image2 from "@/public/sampleImage2.png";

export const RestaurantHeader = () => {
  const performSmoothScroll = () => {
    document
      .querySelector("#about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home-section" className="header-outer-container">
      <Image
        className="header__image"
        src={image1}
        width={1792}
        height={1024}
      />
      <div className="title__container">
        <h1 className="title-name">Peak</h1>
        <h1 className="title-name">Savvy</h1>
        <h2 className="title-industry">Restaurant Consulting</h2>
      </div>
      <div className="social-icon-container"></div>
      <button
        aria-label="scroll down"
        onClick={performSmoothScroll}
        className="down-arrow icon global__hover-animation"
      ></button>
    </section>
  );
};
