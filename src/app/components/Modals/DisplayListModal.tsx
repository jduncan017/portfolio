import ModalWrapper from "./modalWrapper";
import { CardData } from "@/src/lib/dataTypes";
import ListCard from "@/src/app/components/UI-Elements/ListCard";

type DisplayListProps = {
  cardArray: CardData[];
  dataType: "projects" | "technologies";
};

export default function DisplayList({ cardArray, dataType }: DisplayListProps) {
  return (
    <ModalWrapper title={dataType}>
      <div className="CardWrapper flex flex-col gap-6">
        {/* <h3 className="Title mx-auto w-[96%] text-start text-3xl font-semibold uppercase tracking-widest text-white md:w-[92%] md:text-4xl">
          {dataType}
        </h3> */}
        {cardArray.map((cardData: CardData) => (
          <ListCard
            key={cardData.name}
            cardData={cardData}
            dataType={dataType}
          />
        ))}
      </div>
    </ModalWrapper>
  );
}
