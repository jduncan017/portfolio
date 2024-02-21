import { useState } from "react";

export const ToggleScrollbarButton = () => {
  const [scrollbarVisible, setScrollbarVisible] = useState(false);

  const toggleScrollbar = (e) => {
    setScrollbarVisible(!scrollbarVisible);

    if (scrollbarVisible) {
      document.body.classList.add("no-scrollbar");
    } else {
      document.body.classList.remove("no-scrollbar");
    }
  };

  return (
    <button
      onClick={(e) => toggleScrollbar(e)}
      className="fixed -right-10 bottom-12 z-10 hidden -rotate-90 bg-clip-text text-white opacity-60 mix-blend-difference transition-opacity hover:cursor-pointer hover:opacity-100 md:block"
    >
      {scrollbarVisible ? "Hide Scrollbar" : "Show Scrollbar"}
    </button>
  );
};
