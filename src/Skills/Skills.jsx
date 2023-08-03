import styles from "./Skills.module.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
  FaGit,
  FaJs,
  FaLinux,
  FaNode,
  FaNpm,
  FaJava,
  FaGithub,
  FaSass,
  FaBootstrap,
} from "react-icons/fa6";

const Skills = () => {
  return (
    <section className="global-section " id="skills">
      <div className=" containers  ">
        <h2 className="subheading "> My skills and Tools</h2>
      </div>

      <div className={`${styles.grid} containers`}>
        <div>
          {" "}
          <FaHtml5 className={styles.icon} />
        </div>
        <div>
          <FaCss3Alt className={styles.icon} />
        </div>
        <div>
          <FaSass className={styles.icon} />
        </div>
        <div>
          <FaJs className={styles.icon} />
        </div>
        <div>
          <FaReact className={styles.icon} />
        </div>
        <div>
          <FaBootstrap className={styles.icon} />
        </div>
        <div>
          <FaNode className={styles.icon} />
        </div>
        <div>
          <DiMongodb className={styles.icon} />
        </div>
        <div>
          <FaGit className={styles.icon} />
        </div>
        <div>
          <FaNpm className={styles.icon} />
        </div>
        <div>
          <FaLinux className={styles.icon} />
        </div>
        <div>
          <FaJava className={styles.icon} />
        </div>
        <div>
          <FaGithub className={styles.icon} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
