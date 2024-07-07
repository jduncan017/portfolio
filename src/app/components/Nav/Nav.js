import { useState, useEffect, useRef } from "react";
import "./Nav.css";
import ContactModal from "../Modals/contactModal";
import { useModal } from "@/src/contexts/ModalContext";
import Image from "next/image";

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
    return navHeadings.map((heading, index) => {
      const delay = index * 100; // Incremental delay, e.g., 0ms, 100ms, 200ms, etc.
      return (
        <button
          className="nav-buttons m-[0.5px] w-full cursor-pointer rounded-sm border-b border-gray-400 bg-transparent p-4 font-semibold uppercase tracking-[2px] text-white hover:bg-gray-100 hover:text-black sm:w-fit sm:border-none sm:px-3 sm:py-2.5 sm:text-sm"
          tabIndex="0"
          aria-label={`${heading} section`}
          key={`${heading}`}
          onClick={() => performSmoothScroll(`${heading}`)}
          style={{ animationDelay: `${delay}ms` }}
        >{`${heading}`}</button>
      );
    });
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
    <nav className="NavBar">
      {/* Desktop Nav */}
      <div className="DesktopNav fixed z-20 hidden w-full sm:block">
        <div className="NavLinks absolute z-[1] flex h-12 w-full justify-center bg-transparent p-0.5">
          {printNavButtons()}{" "}
          <button
            tabIndex="0"
            aria-label="contact form"
            onClick={() => showModal(<ContactModal />)}
            style={{ animationDelay: `${(navHeadings.length + 1) * 100}ms` }}
            className="nav-buttons m-[0.5px] w-full cursor-pointer rounded-sm border-b border-gray-400 bg-transparent p-4 font-semibold uppercase tracking-[2px] text-white hover:bg-gray-100 hover:text-black sm:w-fit sm:border-none sm:px-3 sm:py-2.5 sm:text-sm"
          >
            Contact
          </button>
        </div>
        <div
          className={`DesktopNavBackground h-12 w-full border-b border-gray-800 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 shadow-2xl transition-all duration-500 ${navStyle && "translate-y-[-100px]"}`}
        />
      </div>

      {/* Mobile Nav */}
      <div
        ref={mobileNavRef}
        className="MobileNavContainer block sm:absolute sm:hidden"
      >
        <Image
          onClick={onHamburgerClick}
          aria-label="toggle menu visibility"
          width={45}
          height={45}
          src="/nav-logo.png"
          className={`HamburgerButton tranition-all fixed z-30 m-1 cursor-pointer opacity-70 duration-500 ${mobileNavVisible && `hamburger-button-turn-left hamburger-button-active opacity-100`}`}
        ></Image>
        <div
          className={`MobileMenu fixed z-20 h-auto w-full bg-black shadow-2xl ${mobileNavVisible ? "animate-slide-in block" : `animate-slide-out ${animateClass}`}`}
        >
          {printNavButtons()}
          <button
            tabIndex="0"
            aria-label="contact form"
            onClick={() => showModal(<ContactModal />)}
            style={{ animationDelay: `${(navHeadings.length + 1) * 100}ms` }}
            className="nav-buttons m-[0.5px] w-full cursor-pointer rounded-sm border-b border-gray-400 bg-transparent p-4 font-semibold uppercase tracking-[2px] text-white hover:bg-gray-100 hover:text-black sm:w-fit sm:border-none sm:px-3 sm:py-2.5 sm:text-sm"
          >
            Contact
          </button>
          <div
            className={`MobileOverlay fixed inset-0 z-[-1] justify-center bg-black opacity-50 ${mobileNavVisible ? "flex" : "hidden"}`}
          />
        </div>
      </div>
    </nav>
  );
};
