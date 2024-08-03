import Image from "next/image";
import type { TestimonialData } from "@/src/lib/dataTypes";
import { useModal } from "@/src/contexts/ModalContext";
import SiteButton from "./SiteButton";
import TestimonialModal from "../Modals/TestimonialModal";

interface TestimonialArray {
  testimonial: TestimonialData;
}

export default function TestimonialCard({ testimonial }: TestimonialArray) {
  const { showModal } = useModal();
  return (
    <div className="Card relative mx-auto flex  h-[300px] w-[310px] flex-col items-start gap-2 rounded-[8px] border border-white/30 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-0 px-7 py-5 shadow-secondaryDim transition-all duration-500 hover:shadow-secondaryBright sm:hover:-translate-y-2 md:h-[270px] md:w-[500px]">
      <div className="TitleSection flex items-start gap-3 md:gap-4">
        <Image
          className="TestimonialImage aspect-square w-16 rounded-full object-cover md:w-20"
          src={testimonial.imagePath}
          alt="Screenshot of testimonial"
          width={80}
          height={80}
        />
        <div className="TitleInfo flex flex-col items-start">
          <h3 className="Title text-gradient-clip w-full font-semibold uppercase tracking-wider md:text-2xl">
            {testimonial.name}
          </h3>
          <p className="Title text-start font-noto text-sm text-gray-500">
            {`${testimonial.title}`}
          </p>
          <p className="Relationship text-sm text-gray-600">
            {testimonial.relationship}
          </p>
        </div>
      </div>
      <div className="DescriptionContainer my-2 flex flex-col items-center gap-1">
        <p className="Description h-full w-full text-sm text-gray-400 md:text-base">
          {testimonial.shortDescription}
        </p>
      </div>
      <SiteButton
        onClick={() =>
          showModal(<TestimonialModal testimonial={testimonial} />)
        }
        aria="View full review"
        addClasses="ReviewButton bottom-2 text-xs md:text-sm my-4 font-medium tracking-widest capitalize absolute"
        textColor="text-gray-400"
        size="small"
        style="silverHollow"
      >
        Full Review
      </SiteButton>
    </div>
  );
}
