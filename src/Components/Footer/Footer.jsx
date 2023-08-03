import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className={styles.grid}>
        <a href="#about">About</a>
        <a href="#projets">projects</a>
        <a href="#skills">Skills</a>

        <a href="#contact">contact</a>
        <a href="#">Home</a>
      </div>
      <hr />

      <p className={styles.demo}>
        Greetings! I'm Esmael, a passionate and driven front-end web developer,
        well-versed in the latest technologies that power modern web
        development. Currently studying computer science at JiT. I am constantly
        pushing the boundaries of what can be achieved on the web. Welcome to my
        portfolio!
      </p>

      <div className={styles.info}>
        <a
          href={" https://facebook.com/Esmael Abdlkadr"}
          className={styles.icon}
        >
          {" "}
          <FaFacebook />{" "}
        </a>
        <a href="https://github.com/smithCoders" className={styles.icon}>
          {" "}
          <FaGithub />{" "}
        </a>
        <a href="www.linkedin.com/in/esmael-abdlkadr" className={styles.icon}>
          {" "}
          <FaLinkedinIn />
        </a>

        <a href={" https://instagram.com/esm__ael"} className={styles.icon}>
          <FaInstagram />
        </a>

        <a href={" https://telegram.com/itisesmael"} className={styles.icon}>
          <FaTelegram />
        </a>
        <a href="https://twitter.com/smithcodder" className={styles.icon}>
          <FaTwitter />
        </a>

        <a
          href={" https://stackoverflowcom/smithcodder"}
          className={styles.icon}
        >
          <FaStackOverflow />
        </a>
      </div>
      <p className={styles.copy}>
        {" "}
        &copy; {new Date().getFullYear()}Copyright:Esmael Abdlkadr{" "}
      </p>
    </footer>
  );
};

export default Footer;
