import { BackgroundGradient } from "../UILibraries/background-gradient";
import Image from "next/image";
import type { TestimonialData } from "@/src/lib/testimonialData";

interface TestimonialArray {
  testimonial: TestimonialData;
}

export default function TestimonialCard({ testimonial }: TestimonialArray) {
  return (
    <BackgroundGradient
      containerClassName="Container w-full h-full mx-auto p-0 hover:scale-105 transition-all duration-500"
      className="Card flex h-full flex-col items-center gap-3 rounded-[12px] bg-gray-900 p-4 text-orange-200 transition-all duration-500 hover:bg-gray-900 hover:text-orange-200 hover:saturate-100 xs:text-orange-200 xs:saturate-0 xl:px-10 xl:py-6"
    >
      <div className="TitleSection flex flex-col items-center">
        <h3 className="Title pointer-events-none w-full text-center text-xl font-semibold uppercase tracking-wider xs:text-lg xl:text-xl">
          {testimonial.name}
        </h3>
        <p className="Relationship text-lg italic text-gray-300">
          {testimonial.relationship}
        </p>
      </div>

      <Image
        className="TestimonialImage pointer-events-none mb-2 aspect-square w-28 rounded-full object-cover"
        src={testimonial.imagePath}
        alt="Screenshot of testimonial"
        width={450}
        height={450}
      />
      <p className="Description pointer-events-none my-2 h-full w-full text-center font-[Muli] text-base capitalize">
        {testimonial.shortDescription}
      </p>
      <button className="ReviewButton my-4 w-fit rounded-md border border-solid border-orange-300 px-4 py-1.5 text-center font-medium uppercase tracking-widest text-orange-200 transition-all duration-500 hover:bg-orange-200 hover:text-black">
        Full Review
      </button>
    </BackgroundGradient>
  );
}
