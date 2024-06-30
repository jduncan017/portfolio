import Image from "next/image";
import { useModal } from "@/src/contexts/ModalContext";
import ContactModal from "../Modals/contactModal";

type ContactCardProps = {
  titlePosition: "justify-start" | "justify-center";
};

export default function ContactCard({ titlePosition }: ContactCardProps) {
  const { showModal } = useModal();
  return (
    <div className="ContactCard">
      <div
        className={`ContactHeader mb-1 flex h-min w-full items-end gap-1 ${titlePosition}`}
      >
        <h3 className="ContactTitle text-gradient-clip text-semibold text-lg uppercase tracking-wide text-white">
          Contact Card
        </h3>
      </div>
      <div
        onClick={() => showModal(<ContactModal />)}
        className="ContactContainer relative w-[270px] cursor-pointer rounded-sm border-4 border-double border-stone-500 bg-stone-200 px-3 py-2 text-stone-700 transition-all duration-500 hover:scale-105 hover:bg-stone-400 mini:w-[300px] mini:px-6 mini:py-4 xs:w-[340px]"
      >
        <h2 className="Name font-serif text-xl uppercase leading-relaxed tracking-wide sm:text-2xl">
          Joshua Duncan
        </h2>
        <p className="Title mb-6 font-sans text-xs uppercase opacity-60 mini:mb-12">
          Software Engineer / Web Developer
        </p>
        <div className="InfoContainer flex gap-2">
          <Image src="/web.svg" width={25} height={25} alt="web" />
          <p className="global-p-text font-serif text-sm xs:text-base">
            Denver, CO
          </p>
        </div>
        <div className="InfoContainer flex gap-2">
          <Image src="/email.svg" width={25} height={25} alt="email" />
          <p className="global-p-text font-serif text-sm xs:text-base">
            emailjoshduncan@gmail.com
          </p>
        </div>
        <p className="ClickMe absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] text-xs uppercase leading-6 tracking-widest text-stone-200">
          {"(click me!)"}
        </p>
      </div>
    </div>
  );
}
