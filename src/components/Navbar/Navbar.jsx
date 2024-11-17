import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div>
          <p className={styles.webName}>PORTFOLIO</p>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <span className={styles.hamburgerIcons}>&#10005;</span> : <span className={styles.hamburgerIcons}>&#9776;</span>} {/* X or Hamburger icon */}
        </div>
        <ul className={`${styles.navContents} ${isOpen ? styles.show : ""}`}>
          <li><a className={styles.navEl} href="#about">About</a></li>
          <li><a className={styles.navEl} href="#projects">Projects</a></li>
          <li><a className={styles.navEl} href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
