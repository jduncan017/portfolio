"use client";
import React from "react";
import { Nav } from "@/src/app/ui/Nav/Nav";
import { RestaurantHeader } from "@/src/app/restaurant_consultant/Header/RestaurantHeader";
import { About } from "@/src/app/ui/About/About";
import { WorkExperience } from "@/src/app/ui/WorkExperience/WorkExperience";
import { Contact } from "@/src/app/ui/Contact/Contact";
import { consultantData } from "./consultantResume";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <RestaurantHeader />
      <About resumeData={consultantData} />
      <WorkExperience />
      <Contact />
    </main>
  );
}
