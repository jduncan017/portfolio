"use client";
import React from "react";
import { Nav } from "./ui/Nav/Nav";
import { Header } from "@/src/app/ui/Header/Header";
import { About } from "@/src/app/ui/About";
import { Contact } from "@/src/app/ui/Contact";
import FavTechSlider from "./ui/FavTechSlider";
import ToggleScrollbarButton from "@/src/app/ui/UI-Elements/ScrollBarButton";
import ProjectSlider from "./ui/ProjectSlider";
import TestimonialSection from "./ui/TestimonialSection";

export default function Home() {
  return (
    <main className="Main overflow-hidden" id="home-section">
      <Nav />
      <Header />
      <div className="PageContent flex flex-col gap-12 bg-gradient-to-b from-black via-cyan-950 to-black py-20">
        <About />
        <ProjectSlider />
        <TestimonialSection />
        <FavTechSlider />
      </div>
      <Contact />
      <ToggleScrollbarButton />
    </main>
  );
}
