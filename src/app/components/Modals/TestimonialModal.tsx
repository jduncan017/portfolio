import Image from "next/image";
import type { TestimonialData } from "@/src/lib/dataTypes";
import ModalWrapper from "./ModalWrapper";
import parse from "html-react-parser";
import type { ReactNode } from "react";

interface TestimonialArray {
  testimonial: TestimonialData;
  currentModal?: ReactNode;
}

export default function TestimonialModal({
  testimonial,
  currentModal,
}: TestimonialArray) {
  return (
    <ModalWrapper title="Testimonial" currentModal={currentModal}>
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
            <p className="Title text-start font-noto text-gray-500">
              {testimonial.title}
            </p>
            <p className="Relationship text-gray-500">
              {testimonial.relationship}
            </p>
          </div>
        </div>

        <div className="DescriptionContainer my-2 flex flex-col items-center gap-1 text-base">
          <p className="Description w-full max-w-[700px] rounded-md border border-gray-700 bg-[#11121c]/60 p-4 text-start leading-6 text-gray-300">
            <p className="Date mb-4 text-start font-noto text-gray-500">
              {`Date: ${testimonial.date}`}
            </p>
            {parse(testimonial.fullReview)}
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
}
