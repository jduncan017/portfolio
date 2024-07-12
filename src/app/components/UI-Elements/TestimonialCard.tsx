import { BackgroundGradient } from "../UI-Libraries/background-gradient";
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
    <BackgroundGradient
      containerClassName="Container w-full h-full max-w-[700px] lg:h-[450px] min-[1480px]:h-[440px] mx-auto p-0.5 sm:hover:scale-105 transition-all duration-500"
      className="Card relative flex h-full flex-col items-center gap-3 rounded-[12px] bg-slate-950 p-4 text-orange-200 transition-all duration-500 xs:text-orange-200 xs:saturate-0 sm:hover:bg-gray-900 sm:hover:text-orange-200 sm:hover:saturate-100 xl:px-10 xl:py-6"
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
        <p className="Description pointer-events-none h-full w-full max-w-[500px] text-center  text-base leading-6 text-gray-200">
          {testimonial.shortDescription}
        </p>
        <p className="Date text-gray-400">{`- ${testimonial.date} -`}</p>
      </div>
      <SiteButton
        onClick={() =>
          showModal(<TestimonialModal testimonial={testimonial} />)
        }
        aria="View full review"
        addClasses="ReviewButton relative bottom-2 sm:text-sm my-4 font-medium tracking-widest uppercase lg:absolute"
        textColor="text-gray-300"
        size="small"
        style="orange"
      >
        Full Review
      </SiteButton>
    </BackgroundGradient>
  );
}
