import React from "react";
import ModalWrapper from "./M";

const CalendlyModal = () => {
  return (
    <ModalWrapper title="Calendly">
      <div className="IframeWrapper h-[60vh] w-[80vw] overflow-hidden rounded-xl sm:w-[500px]">
        <iframe
          src="https://calendly.com/jduncan017/1-hour-meeting"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </ModalWrapper>
  );
};

export default CalendlyModal;
