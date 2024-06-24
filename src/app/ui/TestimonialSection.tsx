import "react-multi-carousel/lib/styles.css";
import { BackgroundGradient } from "@/src/app/ui/UILibraries/background-gradient";
import { TESTIMONIAL_DATA } from "@/src/lib/testimonialData";
import TestimonialCard from "./UI-Elements/TestimonialCard";

export default function TestimonialSection() {
  return (
    <section
      className="testimonialSection flex h-fit scroll-mt-20 flex-col items-center"
      id="testimonials-section"
    >
      <h1 className="Header mx-auto mb-4 w-[90%] border-solid text-start text-3xl font-semibold uppercase tracking-widest text-white md:text-4xl">
        Testimonials
      </h1>
      <div className="BorderWrapper flex w-full justify-center border-y-4 border-double border-gray-500 bg-gradient-to-br from-black via-gray-900 py-16 ">
        <div className="CardContainer flex h-fit w-[85%] flex-wrap justify-between gap-5 lg:w-[95%] lg:flex-nowrap xl:w-[90%]">
          {TESTIMONIAL_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
