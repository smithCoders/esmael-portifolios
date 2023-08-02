import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { VscListSelection } from "react-icons/vsc";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOPen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevMenu) => !prevMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        setIsSticky(window.scrollY > header.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("menubar", isMenuOPen);

  return (
    <header
      className={isSticky ? `${styles.header} ${styles.sticky}` : styles.header}
    >
      <a href={"#"}>
        <img
          src="../../../assets/photo_2023-04-07_04-12-57.jpg "
          alt="Esmael photo"
          className={styles.logo}
        />{" "}
        <h4 className={styles.name}>Esmael Abdlkadr</h4>
      </a>
      <nav className={styles.nav}>
        <ul className={`${styles.lists}  ${isMenuOPen ? styles.NavOpen : ""}`}>
          <li>
            <a className={styles.link} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#about"}>
              About
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#skills"}>
              Skills
            </a>
          </li>
          <li>
            <a className={styles.link} href={"#projects"}>
              Projects
            </a>
          </li>
          <li>
            <a className={styles.contact} href={"#contact"}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile nav */}
      {/* mobile-navbar */}
      <button className={styles.mobileNav} onClick={toggleMenu}>
        {" "}
        {isMenuOPen ? (
          <IoMdClose
            className={`${styles.close} ${styles.mobile}`}
            name="close"
          />
        ) : (
          <VscListSelection
            className={`${styles.open} ${styles.mobile}`}
            name="open"
          />
        )}
      </button>
      {/* render conditonally */}
    </header>
  );
};

export default NavBar;
