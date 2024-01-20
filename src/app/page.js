"use client";
import React from "react";
import { Nav } from "@/src/app/ui/Nav/Nav";
import { Header } from "@/src/app/ui/Header/Header";
import { About } from "@/src/app/ui/About/About";
import { WorkExperience } from "@/src/app/ui/WorkExperience/WorkExperience";
import { Projects } from "@/src/app/ui/Projects/Projects";
import { Contact } from "@/src/app/ui/Contact/Contact";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Header />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}
