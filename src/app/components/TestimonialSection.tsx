import "react-multi-carousel/lib/styles.css";
import { TESTIMONIAL_DATA } from "@/src/lib/testimonialData";
import TestimonialCard from "./UI-Elements/TestimonialCard";
import { motion } from "framer-motion";
import SectionTitle from "./UI-Elements/SectionTitle";

export default function TestimonialSection() {
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

  return (
    <section
      className="testimonialSection flex h-fit scroll-mt-20 flex-col"
      id="testimonials-section"
    >
      <div className="TitleContainer ml-[5%]">
        <SectionTitle title="Testimonials" />
      </div>
      <div className="BorderWrapper mt-4 flex w-full justify-center border-y-4 border-double border-gray-500 bg-gradient-to-br from-black via-slate-950 to-black py-10 shadow-secondaryBright sm:py-16">
        <motion.ul
          variants={motionContainer}
          initial="hidden"
          viewport={{ once: true }}
          className="CardContainer flex h-fit w-[90%] flex-wrap justify-between gap-10 sm:w-[80%] lg:w-[95%] lg:flex-nowrap xl:w-[95%] xxl:max-w-[2400px]"
          whileInView="show"
        >
          {TESTIMONIAL_DATA.map((testimonial) => (
            <motion.li
              key={testimonial.name}
              variants={motionItem}
              className="w-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
