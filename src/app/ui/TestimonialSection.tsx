"use client";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BackgroundGradient } from "@/src/app/ui/UILibraries/background-gradient";
import { TESTIMONIAL_DATA } from "@/src/lib/testimonialData";
import TestimonialCard from "./UI-Elements/TestimonialCard";

export default function TestimonialSection() {
  return (
    <section className="testimonialSection mx-auto flex h-fit w-[90%] flex-col items-center">
      <h1 className="Header mb-4 w-[90%] border-solid text-start text-3xl font-semibold uppercase tracking-widest text-white md:text-4xl">
        Testimonials
      </h1>
      <div className="CardContainer flex justify-between gap-5">
        {TESTIMONIAL_DATA.map((testimonial) => (
          <BackgroundGradient
            key={testimonial.name}
            containerClassName="CarouselTrack w-full rounded-xl"
          >
            <TestimonialCard testimonial={testimonial} />
          </BackgroundGradient>
        ))}
      </div>
      ;
    </section>
  );
}
