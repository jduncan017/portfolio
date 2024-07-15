import React from "react";
import SiteButton from "./SiteButton";
import CalendlyModal from "../Modals/CalendlyModal";
import { useModal } from "@/src/contexts/ModalContext";

const CalendlyButton = () => {
  const { showModal } = useModal();

  return (
    <>
      <SiteButton
        size="large"
        textColor="text-secondary"
        style="purpleHollow"
        addClasses="w-full mini:w-auto"
        onClick={() => showModal(<CalendlyModal />)}
      >
        Schedule a Meeting
      </SiteButton>
    </>
  );
};

export default CalendlyButton;
