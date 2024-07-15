import ModalWrapper from "./ModalWrapper";
import SiteButton from "../UI-Elements/SiteButton";
import { useModal } from "../../../contexts/ModalContext";

export default function SubmitConfirmModal() {
  const { hideModal } = useModal();

  return (
    <ModalWrapper>
      <div className="ModalContainer flex h-fit w-fit flex-col items-center gap-4 rounded-2xl py-3 text-center font-serif sm:px-8">
        <h2 className="Header text-gradient-clip text-2xl font-medium uppercase">
          Thank You!
        </h2>
        <p className="Description max-w-64 text-xl text-gray-300">
          I will be in touch soon!
        </p>
        <div className="ButtonContainer flex h-fit w-fit gap-4">
          <SiteButton
            onClick={() => hideModal()}
            aria="submit"
            addClasses="border-none mt-4"
            textColor="text-black"
            style="silver"
          >
            Close
          </SiteButton>
        </div>
      </div>
    </ModalWrapper>
  );
}
