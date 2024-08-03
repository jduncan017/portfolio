import ModalWrapper from "./ModalWrapper";
import { CardData, TestimonialData } from "@/src/lib/dataTypes";
import ListCard from "@/src/app/components/UI-Elements/ListCard";
import { motion } from "framer-motion";
import TestimonialCard from "../UI-Elements/TestimonialCard";

type DisplayListProps = {
  cardArray: CardData[] | TestimonialData[];
  dataType: "projects" | "technologies" | "testimonial";
};

export default function DisplayListModal({
  cardArray,
  dataType,
}: DisplayListProps) {
  const motionContainer = {
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <ModalWrapper title={dataType}>
      <>
        <motion.ul
          className="CardWrapper flex flex-col gap-6 xl:grid xl:grid-cols-2"
          variants={motionContainer}
          initial="hidden"
          whileInView="show"
        >
          {cardArray.map((cardData) =>
            dataType === "projects" || dataType === "technologies" ? (
              <motion.li key={cardData.name} variants={motionItem}>
                <ListCard
                  cardData={cardData as CardData}
                  dataType={dataType}
                  cardArray={cardArray as CardData[]}
                />
              </motion.li>
            ) : (
              <motion.li key={cardData.name} variants={motionItem}>
                <TestimonialCard
                  testimonial={cardData as TestimonialData}
                  currentModal={
                    <DisplayListModal
                      cardArray={cardArray}
                      dataType={"testimonial"}
                    />
                  }
                />
              </motion.li>
            ),
          )}
        </motion.ul>
      </>
    </ModalWrapper>
  );
}
