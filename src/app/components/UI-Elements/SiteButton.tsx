interface ButtonProps {
  addClasses?: string;
  size?: "small" | "large";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  aria?: string;
  textColor: string;
  style: "purple" | "purpleHollow" | "silver" | "silverHollow";
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
      buttonSize = "px-2.5 py-2 text-sm min-w-[150px]";
      break;
    case "large":
      buttonSize = "px-5 py-3 text-lg w-full";
      break;
    default:
      buttonSize = "w-[220px] py-3 flex-1";
  }

  switch (style) {
    case "purple":
      buttonStyle =
        "bg-secondary text-black hover:bg-slate-300 hover:text-black";
      break;
    case "purpleHollow":
      buttonStyle =
        "border-secondaryDark border hover:bg-slate-300 hover:border-slate-300 hover:text-black";
      break;
    case "silver":
      buttonStyle =
        "bg-gradient-to-br from-gray-200 opacity-70 hover:opacity-200 to-gray-400 hover:opacity-100 hover:text-black";
      break;
    case "silverHollow":
      buttonStyle =
        "border-gray-300/50 border bg-opacity-0 hover:border-secondaryDark hover:bg-opacity-100 bg-secondaryDark hover:text-white";
      break;
    default:
      buttonStyle = "";
  }

  return (
    <button
      className={`SiteButton text-nowrap rounded-md font-sans text-sm font-medium transition-all duration-300 disabled:bg-gray-500 disabled:hover:cursor-not-allowed disabled:hover:text-white ${buttonSize} ${addClasses} ${textColor} ${buttonStyle}
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
