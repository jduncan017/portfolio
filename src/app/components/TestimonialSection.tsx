import "react-multi-carousel/lib/styles.css";
import { TESTIMONIAL_DATA } from "@/src/lib/testimonialData";
import TestimonialCard from "./UI-Elements/TestimonialCard";

export default function TestimonialSection() {
  return (
    <section
      className="testimonialSection flex h-fit scroll-mt-20 flex-col items-center"
      id="testimonials-section"
    >
      <h1 className="Header mx-auto mb-4 w-[90%] border-solid text-start text-3xl font-semibold tracking-widest text-white md:text-4xl">
        Testimonials
      </h1>
      <div className="BorderWrapper flex w-full justify-center border-y-4 border-double border-gray-500 bg-gradient-to-br from-black via-gray-900 py-10 shadow-customBright sm:py-16">
        <div className="CardContainer flex h-fit w-[90%] flex-wrap justify-between gap-5 sm:w-[80%] lg:w-[95%] lg:flex-nowrap xl:w-[90%]">
          {TESTIMONIAL_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
