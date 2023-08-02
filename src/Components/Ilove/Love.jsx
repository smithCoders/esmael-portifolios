import styles from "./love.module.css";
import { FaCode, FaJsSquare, FaEdit } from "react-icons/fa";
const love = () => {
  return (
    <div className={`global-section ${styles.sectionLove}`}>
      <div className="containers ">
        <h2 className={"headerSecondary subheading"}>things i love</h2>
      </div>
      <div className={`${styles.loveGrid} containers grid`}>
        {/* love-1 */}
        <div className={styles.loveFlex}>
          <div>
            <FaCode className={styles.icon} />
          </div>
          <div className={styles.loveTitle}>
            {" "}
            <h3>Front end dev</h3>
          </div>
          <div>
            <p className={styles.loveText}>
              My expertise lies primarily in front-end development, and I have a
              deep passion for crafting engaging user experiences using ReactJS
              alongside pure HTML and CSS and javaScirpt.
            </p>
          </div>
        </div>
        <div>
          {/* love-2 */}
          <div className={styles.loveFlex}>
            <div>
              <FaJsSquare
                className={styles.icon}
                style={{ marginTop: "27px" }}
              />
            </div>
            <div className={styles.loveTitle}>
              {" "}
              <h3>Js and its Family</h3>
            </div>
            <div>
              <p className={styles.loveText}>
                I am incredibly passionate about JavaScript and its frameworks,
                particularly React and Svelte. Words can hardly do justice to
                the immense love I have for JavaScript and the joy it brings me
                in my work.
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* love-3 */}
          <div className={`${styles.loveFlex} ${styles.lastChild}`}>
            <div>
              <FaEdit className={styles.icon} />
            </div>
            <div className={styles.loveTitle}>
              {" "}
              <h3>Content Creator for Websites</h3>
            </div>
            <div>
              <p className={styles.loveText}>
                As a creative content creator for websites, I take immense
                pleasure in shaping engaging user experiences. I excel in
                harnessing the power of ReactJS and unleashing the artistic
                possibilities of pure HTML and CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default love;
