import styles from "./Hero.module.css";
import { NavLink } from "react-router-dom";
import DownloadCv from "../DownloadCv";
const Hero = () => {
  return (
    <header className={styles.header} id="hero">
      <div className={styles.cta}>
        <div className={styles.textBox}>
          <h1 className={styles.headingPrimary}>
            <span className={styles.name}>Esmael Abdu</span>
            <span className={styles.title}>Front End web developer</span>
          </h1>
          {/* <p className={styles.demo}>
            Greetings! I'm Esmael, a passionate FrontEnd developer from
            Ethiopia. Currently studying computer science at JiT. Welcome to my
            portfolio!
          </p> */}
        </div>

        <DownloadCv />
      </div>
    </header>
  );
};

export default Hero;
