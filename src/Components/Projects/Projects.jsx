import Card from "../Card/Card";
import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects">
      <div className=" containers  ">
        <h2 className="subheading ">Projects</h2>
      </div>
      <div className={styles.projects}>
        {/* project-1 */}
        <div className={styles.textBox}>
          <p className={styles.stepNumber}>01</p>
          <h3 className={styles.title}> omni food inc. website</h3>
          <p className={styles.text}>
            omni food is AI based food delivery website that cook and deliver
            food for custoemrs who register on the system. it has many cool
            futures example once you entered your favorite food it will
            automatically register your food and for the next time it will
            recommend your favorite food.
          </p>
          <div className={styles.links}>
            <a href="#" className={styles.case}>
              Live{" "}
            </a>
            <a href="">
              {" "}
              <FaGithub className={styles.icon} />
            </a>

            <a href="#" className={styles.case}>
              Case study{" "}
            </a>
          </div>
        </div>
        <div className={styles.card}>
          {/* <Card
            image={project1.image}
            title={project1.title}
            details={project1.details}
          /> */}
          <img
            src="../../../assets//project/project-1.jpg"
            alt=""
            className={styles.images}
          />
          ;
        </div>

        {/* project-2 */}

        <div className={styles.card}>
          <img
            src="../../../assets//project/pro-2.png"
            alt=""
            className={styles.images}
          />
        </div>
        <div className={styles.textBox}>
          <p className={styles.stepNumber}>02</p>
          <h3 className={styles.title}>tour bank application</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            voluptatem fuga minus aliquam laudantium, adipisci consectetur rem
            laborum animi maxime nisi ea quis non recusandae deleniti illo.
            Cumque, vitae libero.
          </p>
        </div>
        {/* project-3 */}
        <div className={styles.textBox}>
          <p className={styles.stepNumber}>03</p>
          <h3 className={styles.title}>Bankist with Minimalist</h3>
          <p className={styles.text}>
            Bankist is a big fanacial company that work based on delivering
            collection of bank servbice from different bank to its customer
            specially for premimum customesr.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src="../../../assets//project/project-2.jpg"
            alt=""
            className={styles.images}
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
