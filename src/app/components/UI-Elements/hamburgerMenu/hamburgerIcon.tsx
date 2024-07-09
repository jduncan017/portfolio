import React from "react";
import styles from "./hamburgerIcon.module.css";

interface HamburgerIconProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  menuOpen,
  onToggleMenu,
}) => {
  return (
    <button className={styles.siteContainer} onClick={onToggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.hamburgerIcon} ${menuOpen ? styles.hamburgerIconActive : ""}`}
        width="30"
        height="30"
        viewBox="0 0 48 48"
      >
        <rect
          className={`${styles.rect} ${styles.top}`}
          x="0"
          y="0"
          rx="4"
          ry="4"
          width="100%"
          height="4"
        />
        <rect
          className={`${styles.rect} ${styles.middle}`}
          x="0"
          y="20"
          rx="4"
          ry="4"
          width="100%"
          height="4"
        />
        <rect
          className={`${styles.rect} ${styles.bottom}`}
          x="0"
          y="40"
          rx="4"
          ry="4"
          width="100%"
          height="4"
        />
      </svg>
    </button>
  );
};

export default HamburgerIcon;
