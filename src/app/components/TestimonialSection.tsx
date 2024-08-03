import "react-multi-carousel/lib/styles.css";
import { TESTIMONIAL_DATA } from "@/src/lib/testimonialData";
import TestimonialCard from "./UI-Elements/TestimonialCard";
import { motion } from "framer-motion";
import SectionTitle from "./UI-Elements/SectionTitle";
import Ticker from "framer-motion-ticker";
import { useState } from "react";
import DisplayListModal from "@/src/app/components/Modals/DisplayListModal";
import { useModal } from "@/src/contexts/ModalContext";

export default function TestimonialSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const { showModal } = useModal();
  const motionContainer = {
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const motionItem = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          type: "spring",
          duration: 0.8,
        },
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  const sortedTestimonials = [...TESTIMONIAL_DATA].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section
      className="testimonialSection flex h-fit scroll-mt-20 flex-col"
      id="testimonials-section"
    >
      <div className="TitleContainer ml-[5%] flex flex-col items-start xs:flex-row xs:items-end xs:gap-4">
        <SectionTitle title="Testimonials" />
        <motion.button
          className="ShowAllButton pr-2 text-lg italic text-gray-400 transition-all duration-500 hover:scale-105 hover:text-secondary md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          onClick={() =>
            showModal(
              <DisplayListModal
                cardArray={sortedTestimonials}
                dataType={"testimonial"}
              />,
            )
          }
        >
          View All
        </motion.button>
      </div>
      <div className="BorderWrapper mt-4 flex w-full justify-center border-y-4 border-double border-gray-500 bg-gradient-to-br from-black via-slate-950 to-black py-8 shadow-secondaryBright md:py-10">
        <motion.ul
          variants={motionContainer}
          initial="hidden"
          viewport={{ once: true }}
          className="CardContainer flex h-fit w-[90%] flex-wrap justify-center gap-10 sm:w-[80%] lg:w-[95%]"
          whileInView="show"
        >
          <Ticker
            duration={100}
            direction={-1}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            isPlaying={isPlaying}
          >
            {sortedTestimonials.map((testimonial) => (
              <motion.li
                key={testimonial.name}
                variants={motionItem}
                className="ml-4 md:ml-8"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.li>
            ))}
          </Ticker>
        </motion.ul>
      </div>
    </section>
  );
}
