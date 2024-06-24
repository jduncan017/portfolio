import ModalWrapper from "./modalWrapper";
import SiteButton from "../UI-Elements/SiteButton";
import { useModal } from "../../../contexts/ModalContext";

export default function SubmitConfirmModal() {
  const { hideModal } = useModal();

  return (
    <ModalWrapper>
      <div className="ModalContainer flex h-fit w-[500px] flex-col items-center gap-4 rounded-2xl p-5 px-8 py-3 text-center font-serif">
        <h2 className="Header text-2xl font-medium uppercase text-darkTeal">
          Thank You!
        </h2>
        <p className="Description max-w-64 text-xl text-gray-300">
          I have received your message and will be in touch soon!
        </p>
        <div className="ButtonContainer flex h-fit w-fit gap-4">
          <SiteButton
            onSubmit={() => hideModal()}
            size="lg"
            aria="submit"
            addClasses="border-none bg-darkTeal/90 hover:bg-gray-300 hover:text-black mt-4"
            textColor="text-gray-200"
          >
            Close
          </SiteButton>
        </div>
      </div>
    </ModalWrapper>
  );
}
