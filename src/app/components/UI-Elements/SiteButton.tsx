import { text } from "stream/consumers";

interface ButtonProps {
  addClasses?: string;
  size?: "small" | "large";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  aria?: string;
  textColor: string;
  style: "orange" | "teal" | "tealHollow";
  children: React.ReactNode;
}

const SiteButton = ({
  addClasses,
  size,
  onClick,
  disabled,
  type = "button",
  aria,
  textColor,
  style,
  children,
}: ButtonProps) => {
  let buttonSize: string;
  let buttonStyle: string;

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

  switch (style) {
    case "orange":
      buttonStyle =
        "border-orange-200 border hover:bg-orange-200 hover:text-black";
      break;
    case "teal":
      buttonStyle =
        "border-none bg-darkTeal/90 hover:bg-white hover:text-black";
      break;
    case "tealHollow":
      buttonStyle =
        "border-darkTeal/90 border hover:bg-white hover:border-white hover:text-black";
      break;
    default:
      buttonStyle = "";
  }

  return (
    <button
      className={`SiteButton rounded-lg font-sans text-sm transition-all duration-300 hover:scale-105 disabled:bg-gray-500 disabled:hover:cursor-not-allowed disabled:hover:text-white sm:text-base ${buttonSize} ${addClasses} ${textColor} ${buttonStyle}
      `}
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      aria-label={aria}
    >
      {children}
    </button>
  );
};

export default SiteButton;
