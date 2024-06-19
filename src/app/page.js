"use client";
import React from "react";
import { Nav } from "./ui/Nav/Nav";
import { Header } from "@/src/app/ui/Header/Header";
import { About } from "@/src/app/ui/About";
import { Projects } from "@/src/app/ui/Projects";
import { Contact } from "@/src/app/ui/Contact/Contact";
import { RESUME_DATA } from "../lib/resumeData";
import { FavTech } from "./ui/FavTech/FavTech";
import { ToggleScrollbarButton } from "./ui/ScrollBarButton";

export default function Home() {
  return (
    <main className="" id="home-section">
      <Nav />
      <Header />
      <div className="PageContent bg-gradient-to-b from-black via-cyan-950 to-gray-950 py-20">
        <About RESUME_DATA={RESUME_DATA} />
        <Projects />
        <FavTech />
      </div>
      <Contact />
      <ToggleScrollbarButton />
    </main>
  );
}
