import { text } from "stream/consumers";

interface ButtonProps {
  addClasses?: string;
  size?: string;
  onSubmit?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  aria: string;
  textColor: string;
  children: React.ReactNode;
}

const SiteButton = ({
  addClasses,
  size,
  onSubmit,
  disabled,
  type = "button",
  aria,
  textColor,
  children,
}: ButtonProps) => {
  let buttonSize: string;

  switch (size) {
    case "small":
      buttonSize = "px-3 py-2 text-sm";
      break;
    case "large":
      buttonSize = "px-5 py-3 text-lg";
      break;
    default:
      buttonSize = "w-[220px] py-3 flex-1";
  }

  return (
    <button
      className={`SiteButton rounded-lg border border-orange-200 font-sans text-sm transition-all duration-300 hover:scale-105 hover:bg-orange-200 hover:text-black disabled:bg-gray-500 disabled:hover:cursor-not-allowed disabled:hover:text-white sm:text-base ${buttonSize} ${addClasses} ${textColor}
      `}
      type={type ?? "button"}
      onClick={onSubmit}
      disabled={disabled}
      aria-label={aria}
    >
      {children}
    </button>
  );
};

export default SiteButton;
