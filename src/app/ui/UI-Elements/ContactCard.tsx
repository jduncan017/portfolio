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
        <h3 className="ContactTitle text-semibold text-lg uppercase text-white">
          Contact Card
        </h3>
        <p className="ContactCard text-xs italic leading-7 text-gray-300">
          {"(click me!)"}
        </p>
      </div>
      <div
        onClick={() => showModal(<ContactModal />)}
        className="ContactContainer w-[300px] cursor-pointer rounded-sm border-4 border-double border-stone-500 bg-stone-200 px-6 py-4 text-stone-700 transition-all duration-500 hover:scale-105 xs:w-[340px]"
      >
        <h2 className="Name font-serif text-xl uppercase leading-relaxed tracking-wide sm:text-2xl">
          Joshua Duncan
        </h2>
        <p className="Title mb-12 font-serif text-xs uppercase opacity-60">
          Software Engineer / Web Developer
        </p>
        <div className="InfoContainer flex gap-2">
          <Image src="/web.svg" width={25} height={25} alt="web" />
          <p className="global-p-text text-sm xs:text-base">Denver, CO</p>
        </div>
        <div className="InfoContainer flex gap-2">
          <Image src="/email.svg" width={25} height={25} alt="email" />
          <p className="global-p-text text-sm xs:text-base">
            emailjoshduncan@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
