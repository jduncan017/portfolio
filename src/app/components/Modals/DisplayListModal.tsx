import ModalWrapper from "./ModalWrapper";
import { CardData } from "@/src/lib/dataTypes";
import ListCard from "@/src/app/components/UI-Elements/ListCard";
import { motion } from "framer-motion";

type DisplayListProps = {
  cardArray: CardData[];
  dataType: "projects" | "technologies";
};

export default function DisplayList({ cardArray, dataType }: DisplayListProps) {
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
          {cardArray.map((cardData: CardData) => (
            <motion.li key={cardData.name} variants={motionItem}>
              <ListCard
                cardData={cardData}
                dataType={dataType}
                cardArray={cardArray}
              />
            </motion.li>
          ))}
        </motion.ul>
      </>
    </ModalWrapper>
  );
}
