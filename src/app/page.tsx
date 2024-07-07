"use client";
import React from "react";
import { Nav } from "./components/Nav/Nav";
import { Header } from "@/src/app/components/Header";
import { About } from "@/src/app/components/About";
import { Footer } from "@/src/app/components/Footer";
import SliderSection from "./components/SliderSection";
import ToggleScrollbarButton from "@/src/app/components/UI-Elements/ScrollBarButton";
import TestimonialSection from "./components/TestimonialSection";
import { FAV_TECH_DATA } from "../lib/favoriteTechData";
import { PROJECT_DATA } from "../lib/projectData";

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
          dataType="projects"
        />
        <TestimonialSection />
        <SliderSection
          cardArray={FAV_TECH_DATA}
          id="technologies-section"
          title="Favorite Technologies"
          dataType="technologies"
        />
      </div>
      <Footer />
      <ToggleScrollbarButton />
    </main>
  );
}
