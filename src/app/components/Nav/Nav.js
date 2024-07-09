import { useState, useEffect, useRef } from "react";
import "./Nav.css";
import ContactModal from "../Modals/contactModal";
import { useModal } from "@/src/contexts/ModalContext";
import Image from "next/image";
import HamburgerIcon from "../UI-Elements/hamburgerMenu/hamburgerIcon";

export const Nav = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [animateClass, setAnimateClass] = useState("hidden");
  const [navStyle, setNavStyle] = useState(true);
  const { showModal } = useModal();
  const mobileNavRef = useRef();
  const navHeadings = [
    "home",
    "about",
    "projects",
    "testimonials",
    "technologies",
  ];

  //this controls the animation of the full nav bar background
  useEffect(() => {
    const navTrigger = document.querySelector("#nav-trigger");

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If header is not in viewport, change nav background
        if (!entry.isIntersecting) {
          setNavStyle(false);
        } else {
          setNavStyle(true);
        }
      },
      {
        root: null, // viewport
        threshold: 0, // trigger callback when header is just not visible
      },
    );

    if (navTrigger) observer.observe(navTrigger);

    return () => {
      if (navTrigger) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (mobileNavVisible && !mobileNavRef.current.contains(event.target)) {
      onHamburgerClick();
    }
  };

  const performSmoothScroll = (sectionName) => {
    document
      .querySelector(`#${sectionName}-section`)
      .scrollIntoView({ behavior: "smooth" });
    onHamburgerClick();
  };

  const printNavButtons = () => {
    return (
      <div className="NavButtonsContainer">
        {navHeadings.map((heading, index) => {
          const delay = index * 100; // Incremental delay, e.g., 0ms, 100ms, 200ms, etc.
          return (
            <button
              className="nav-buttons w-full cursor-pointer rounded-sm border-b border-gray-400 bg-transparent p-4 font-semibold uppercase tracking-[2px] text-white hover:bg-gray-100 hover:text-black sm:m-[0.5px] sm:w-fit sm:border-none sm:px-2 sm:py-2.5 sm:text-sm md:px-3"
              aria-label={`${heading} section`}
              key={`${heading}`}
              onClick={() => performSmoothScroll(`${heading}`)}
              style={{ animationDelay: `${delay}ms` }}
            >
              {`${heading}`}
            </button>
          );
        })}
        {/* Contact Button */}
        <button
          tabIndex="0"
          aria-label="contact form"
          onClick={() => showModal(<ContactModal />)}
          style={{ animationDelay: `${navHeadings.length * 100}ms` }}
          className="nav-buttons w-full cursor-pointer rounded-sm border-b border-gray-400 bg-transparent p-4 font-semibold uppercase tracking-[2px] text-white hover:bg-gray-100 hover:text-black sm:m-[0.5px] sm:w-fit sm:border-none sm:px-3 sm:py-2.5 sm:text-sm"
        >
          Contact
        </button>
      </div>
    );
  };

  const onHamburgerClick = () => {
    if (mobileNavVisible) {
      setMobileNavVisible(false);
      setAnimateClass("");
      setTimeout(() => {
        setAnimateClass("hidden");
      }, 700);
    } else {
      setMobileNavVisible(true);
    }
  };

  return (
    <nav className="NavBar fixed left-0 right-0 top-0 z-50">
      {/* Desktop Nav */}
      <div className="DesktopNav fixed z-50 hidden w-full sm:block">
        <div className="NavLinks absolute z-[1] flex h-12 w-full justify-center bg-transparent p-0.5">
          {printNavButtons()}
        </div>
        <div
          className={`DesktopNavBackground h-12 w-full border-b border-gray-800 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 shadow-2xl transition-all duration-500 ${
            navStyle ? "translate-y-[-100px]" : ""
          }`}
        />
      </div>

      {/* Mobile Nav */}
      <div
        ref={mobileNavRef}
        className={`MobileNavContainer fixed right-0 top-0 z-50 h-[64px] sm:absolute sm:hidden ${
          mobileNavVisible ? "border-b border-white bg-black" : ""
        }`}
      >
        <HamburgerIcon
          onToggleMenu={onHamburgerClick}
          menuOpen={mobileNavVisible}
        />
        <div
          className={`MobileMenu mt-10 h-auto w-full bg-black shadow-2xl ${
            mobileNavVisible
              ? "animate-slide-in block"
              : `animate-slide-out ${animateClass}`
          }`}
        >
          {printNavButtons()}
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileNavVisible && (
        <div
          className="MobileOverlay fixed inset-0 z-40 bg-black opacity-50 sm:hidden"
          onClick={onHamburgerClick}
        />
      )}
    </nav>
  );
};
