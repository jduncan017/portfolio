"use client";
import React from "react";
import { Nav } from "./ui/Nav/Nav";
import { Header } from "@/src/app/ui/Header/Header";
import { About } from "@/src/app/ui/About";
import { Footer } from "@/src/app/ui/Footer";
import SliderSection from "./ui/SliderSection";
import ToggleScrollbarButton from "@/src/app/ui/UI-Elements/ScrollBarButton";
import TestimonialSection from "./ui/TestimonialSection";
import { FAV_TECH_DATA } from "../lib/favoriteTechData";
import { PROJECT_DATA } from "../lib/projectData";
import TechIcons from "./ui/UI-Elements/TechIcons";

export default function Home() {
  return (
    <main className="Main overflow-hidden" id="home-section">
      <Nav />
      <Header />
      <div className="PageContent flex flex-col gap-12 bg-gradient-to-b from-black to-slate-950 py-20 sm:gap-20">
        <About />
        <SliderSection
          cardArray={PROJECT_DATA}
          id="projects-section"
          title="My Projects"
          dataType="project"
        />
        <TestimonialSection />
        <SliderSection
          cardArray={FAV_TECH_DATA}
          id="technologies-section"
          title="Favorite Technologies"
          dataType="technology"
        />
      </div>
      <Footer />
      <ToggleScrollbarButton />
    </main>
  );
}
