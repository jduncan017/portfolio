import { BackgroundGradient } from "../UILibraries/background-gradient";
import Image from "next/image";
import type { TestimonialData } from "@/src/lib/dataTypes";

interface TestimonialArray {
  testimonial: TestimonialData;
}

export default function TestimonialCard({ testimonial }: TestimonialArray) {
  return (
    <BackgroundGradient
      containerClassName="Container w-full h-full lg:h-[530px] xl:h-[515px] sxl:h-[480px] mx-auto p-0.5 hover:scale-105 transition-all duration-500"
      className="Card relative flex h-full flex-col items-center gap-3 rounded-[12px] bg-gray-900 p-4 text-orange-200 transition-all duration-500 hover:bg-gray-900 hover:text-orange-200 hover:saturate-100 xs:text-orange-200 xs:saturate-0 xl:px-10 xl:py-6"
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
        className="TestimonialImage pointer-events-none aspect-square w-28 rounded-full object-cover"
        src={testimonial.imagePath}
        alt="Screenshot of testimonial"
        width={150}
        height={150}
      />
      <div className="DescriptionContainer my-2 flex flex-col items-center gap-1 text-base">
        <p className="Description pointer-events-none h-full w-full max-w-[500px] text-center font-sans text-base leading-6">
          {testimonial.shortDescription}
        </p>
        <p className="Date text-gray-400">{`- ${testimonial.date} -`}</p>
      </div>
      <button className="ReviewButton relative bottom-2 my-4 w-fit rounded-md border border-solid border-orange-300 px-4 py-1.5 text-center font-medium uppercase tracking-widest text-orange-200 transition-all duration-500 hover:bg-orange-200 hover:text-black lg:absolute">
        Full Review
      </button>
    </BackgroundGradient>
  );
}
