import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";

export const Nav = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [animateClass, setAnimateClass] = useState("hidden");
  const [hamburgerBtnTurnLeft, setHamburgerBtnTurnLeft] = useState("");
  const [navStyle, setNavStyle] = useState("full-nav__background_hidden");
  const mobileNavRef = useRef();

  //this controls the animation of the full nav bar background
  useEffect(() => {
    const navTrigger = document.querySelector("#nav-trigger");

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If header is not in viewport, change nav background
        if (!entry.isIntersecting) {
          setNavStyle("full-nav__background");
        } else {
          setNavStyle("full-nav__background full-nav__background_hidden");
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
    const navHeadings = [
      "home",
      "about",
      "projects",
      "technologies",
      "contact",
    ];
    return navHeadings.map((heading, index) => {
      const delay = index * 100; // Incremental delay, e.g., 0ms, 100ms, 200ms, etc.
      return (
        <button
          tabIndex="0"
          aria-label={`${heading} section`}
          key={`${heading}`}
          onClick={() => performSmoothScroll(`${heading}`)}
          style={{ animationDelay: `${delay}ms` }}
          className="nav-buttons"
        >{`${heading}`}</button>
      );
    });
  };

  const onHamburgerClick = () => {
    if (mobileNavVisible) {
      setHamburgerBtnTurnLeft("hamburger-button-turn-left");
      setMobileNavVisible(false);
      setAnimateClass("mobile-menu animate-slide-out");
      setTimeout(() => {
        setAnimateClass("hidden");
      }, 800);
    } else {
      setMobileNavVisible(true);
    }
  };

  return (
    <nav className="nav">
      {/* full nav */}
      <div className="full-nav hidden sm:block">
        <div className="full-nav__links">{printNavButtons()}</div>
        <div className={navStyle} />
      </div>

      {/* mobile nav */}
      <div ref={mobileNavRef} className="mobile-nav-container">
        <button
          onClick={onHamburgerClick}
          aria-label="toggle menu visibility"
          className={
            !mobileNavVisible
              ? `hamburger-button ${hamburgerBtnTurnLeft}`
              : "hamburger-button-active"
          }
        ></button>
        <div
          className={
            mobileNavVisible
              ? "mobile-menu animate-slide-in"
              : `${animateClass}`
          }
        >
          {printNavButtons()}
          <div
            className={`_mobile-overlay fixed inset-0 z-[-1] justify-center 
            bg-black opacity-50 ${mobileNavVisible ? "flex" : "hidden"}`}
          />
        </div>
      </div>
    </nav>
  );
};
