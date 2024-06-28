import ModalWrapper from "./modalWrapper";
import { CardData } from "@/src/lib/dataTypes";
import ListCard from "@/src/app/components/UI-Elements/ListCard";

type DisplayListProps = {
  cardArray: CardData[];
  dataType: "projects" | "technologies";
};

export default function DisplayList({ cardArray, dataType }: DisplayListProps) {
  return (
    <ModalWrapper title={dataType} closeButton>
      <>
        <div className="CardWrapper mt-8 flex flex-col gap-6">
          {cardArray.map((cardData: CardData) => (
            <ListCard
              key={cardData.name}
              cardData={cardData}
              dataType={dataType}
              cardArray={cardArray}
            />
          ))}
        </div>
      </>
    </ModalWrapper>
  );
}
