"use client";
import React from "react";
import { Nav } from "@/src/app/ui/Nav/Nav";
import { Header } from "@/src/app/ui/Header/Header";
import { About } from "@/src/app/ui/About/About";
import { WorkExperience } from "@/src/app/ui/WorkExperience/WorkExperience";
import { Projects } from "@/src/app/ui/Projects/Projects";
import { Contact } from "@/src/app/ui/Contact/Contact";
import { resumeData } from "../lib/resumeData";
import FavoriteTech from "./ui/FavoriteTech/FavoriteTech";

export default function Home() {
  console.log(resumeData);
  return (
    <main className="">
      <Nav />
      <Header />
      <About resumeData={resumeData} />
      <WorkExperience />
      <Projects />
      <FavoriteTech />
      <Contact />
    </main>
  );
}
