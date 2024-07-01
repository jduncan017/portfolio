import Image from "next/image";
import type { TestimonialData } from "@/src/lib/dataTypes";
import ModalWrapper from "./modalWrapper";
import parse from "html-react-parser";

interface TestimonialArray {
  testimonial: TestimonialData;
}

export default function TestimonialModal({ testimonial }: TestimonialArray) {
  return (
    <ModalWrapper title="Testimonial" closeButton>
      <div className="TestomonialModal flex flex-col gap-5 overflow-hidden py-2 md:px-6">
        <div className="TitleSection flex items-center gap-4">
          <Image
            className="TestimonialImage pointer-events-none aspect-square w-16 rounded-full object-cover"
            src={testimonial.imagePath}
            alt="Screenshot of testimonial"
            width={64}
            height={64}
          />
          <div className="TitleInfo flex flex-col items-start">
            <h3 className="Title text-primaryDark pointer-events-none w-full text-center text-xl font-semibold uppercase tracking-wider xs:text-2xl">
              {testimonial.name}
            </h3>
            <p className="Relationship text-lg italic text-gray-300">
              {testimonial.relationship}
            </p>
          </div>
        </div>
        <div className="InfoSection flex flex-col gap-1">
          <p className="Date text-start text-gray-400">{`Date: ${testimonial.date}`}</p>
          <p className="Date text-start text-gray-400">{`Contact: ${testimonial.contact}`}</p>
        </div>

        <div className="DescriptionContainer my-2 flex flex-col items-center gap-1 text-base">
          <p className="Description w-full max-w-[700px] rounded-md border border-gray-900 bg-gray-800 p-4 text-start  leading-6 text-gray-200">
            {parse(testimonial.fullReview)}
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
}
