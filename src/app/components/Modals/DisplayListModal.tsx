import ModalWrapper from "./modalWrapper";
import { CardData } from "@/src/lib/dataTypes";
import ListCard from "@/src/app/components/UI-Elements/ListCard";
import SiteButton from "../UI-Elements/SiteButton";
import { useModal } from "@/src/contexts/ModalContext";

type DisplayListProps = {
  cardArray: CardData[];
  dataType: "projects" | "technologies";
};

export default function DisplayList({ cardArray, dataType }: DisplayListProps) {
  const { hideModal } = useModal();
  return (
    <ModalWrapper title={dataType}>
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
        <SiteButton
          onClick={() => hideModal()}
          aria="close modal"
          textColor="text-gray-200"
          style="teal"
          addClasses="mt-8"
        >
          Close
        </SiteButton>
      </>
    </ModalWrapper>
  );
}
