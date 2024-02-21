"use client";
import React from "react";
import { Nav } from "./ui/Nav/Nav";
import { Header } from "@/src/app/ui/Header/Header";
import { About } from "@/src/app/ui/About/About";
import { WorkExperience } from "@/src/app/ui/WorkExperience/WorkExperience";
import { Projects } from "@/src/app/ui/Projects/Projects";
import { Contact } from "@/src/app/ui/Contact/Contact";
import { RESUME_DATA } from "../lib/resumeData";
import { FavTech } from "./ui/FavTech/FavTech";
import { ParticlesAnimation } from "./ui/ParticlesAnimation/ParticlesAnimation";

export default function Home() {
  return (
    <main className="">
      <section
        id="home-section"
        className="_particles-background pb-25 fixed z-[-10] h-full w-full text-center"
      >
        <ParticlesAnimation />
      </section>
      <Nav />
      <Header />
      <About RESUME_DATA={RESUME_DATA} />
      <WorkExperience />
      <Projects />
      <FavTech />
      <Contact />
    </main>
  );
}
