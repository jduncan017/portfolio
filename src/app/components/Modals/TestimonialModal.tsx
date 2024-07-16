import Image from "next/image";
import type { TestimonialData } from "@/src/lib/dataTypes";
import ModalWrapper from "./ModalWrapper";
import parse from "html-react-parser";

interface TestimonialArray {
  testimonial: TestimonialData;
}

export default function TestimonialModal({ testimonial }: TestimonialArray) {
  return (
    <ModalWrapper title="Testimonial">
      <div className="TestomonialModal flex flex-col gap-5 overflow-hidden py-2 md:px-6">
        <div className="TitleSection flex items-center gap-4">
          <Image
            className="TestimonialImage pointer-events-none aspect-square w-20 rounded-full object-cover"
            src={testimonial.imagePath}
            alt="Screenshot of testimonial"
            width={80}
            height={80}
          />
          <div className="TitleInfo flex flex-col items-start">
            <h3 className="Title text-gradient-clip pointer-events-none w-full text-center text-xl font-semibold uppercase tracking-wider xs:text-2xl">
              {testimonial.name}
            </h3>
            <p className="Relationship text-xl text-gray-400">
              {testimonial.relationship}
            </p>
            <p className="Date text-start font-noto text-gray-500">
              {testimonial.date}
            </p>
          </div>
        </div>

        <div className="DescriptionContainer my-2 flex flex-col items-center gap-1 text-base">
          <p className="Description w-full max-w-[700px] rounded-md border border-gray-700 bg-[#11121c]/60 p-4 text-start leading-6 text-gray-300">
            {parse(testimonial.fullReview)}
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
}
