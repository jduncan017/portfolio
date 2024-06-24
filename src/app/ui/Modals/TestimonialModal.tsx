import Image from "next/image";
import type { TestimonialData } from "@/src/lib/dataTypes";
import { useModal } from "@/src/contexts/ModalContext";
import ModalWrapper from "./modalWrapper";

interface TestimonialArray {
  testimonial: TestimonialData;
}

export default function TestimonialModal({ testimonial }: TestimonialArray) {
  const { showModal } = useModal();
  return (
    <ModalWrapper>
      <div className="TestomonialModal flex flex-col gap-5 px-10 py-2">
        <div className="TitleSection flex items-center gap-2">
          <Image
            className="TestimonialImage pointer-events-none aspect-square w-16 rounded-full object-cover"
            src={testimonial.imagePath}
            alt="Screenshot of testimonial"
            width={64}
            height={64}
          />
          <div className="TitleInfo flex flex-col items-start">
            <h3 className="Title pointer-events-none w-full text-center text-xl font-semibold uppercase tracking-wider text-darkTeal xs:text-2xl">
              {testimonial.name}
            </h3>
            <p className="Relationship text-lg italic text-gray-300">
              {testimonial.relationship}
            </p>
          </div>
        </div>
        <div className="InfoSection flex gap-4">
          <p className="Date text-start text-gray-400">{`Date: ${testimonial.date}`}</p>
          <p className="Date text-start text-gray-400">{`Contact: ${testimonial.contact}`}</p>
        </div>

        <div className="DescriptionContainer my-2 flex flex-col items-center gap-1 text-base">
          <p className="Description pointer-events-none h-full w-full max-w-[700px] text-start font-sans text-base leading-6 text-gray-200">
            {testimonial.fullReview}
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
}
