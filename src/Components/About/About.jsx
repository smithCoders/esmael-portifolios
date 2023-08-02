import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.secAbout} id="about">
      <div className="containers ">
        <h2 className={`headerSecondary subheading`}>about esmael</h2>
      </div>
      <div className={`${styles.about}`}>
        <div className={styles.aboutGrid}>
          {/* photo */}
          <div className={styles.imgBox}>
            <img
              src="../../../assets/photo_2023-04-07_04-12-57.jpg"
              alt="esmael A."
              className={styles.img}
            />
          </div>
          {/* texts */}
          <div className={styles.texts}>
            <p className={styles.text}>
              I am Esmael Abdlkadr, a passionate and driven front-end web
              developer, well-versed in the latest technologies that power
              modern web development. With expertise in HTML, CSS, and
              contemporary JavaScript libraries like React, I am constantly
              pushing the boundaries of what can be achieved on the web.
            </p>
            <p className={styles.text}>
              Currently pursuing my Computer Science degree at Jimma Institute
              of Technology (JiT), I am on a journey of continuous learning and
              growth. My recent endeavors have taken me beyond the front-end
              realm, as I delve into the exciting world of Node.js.
            </p>
            <p className={styles.text}>
              Apart from my academic pursuits, I am deeply committed to sharing
              my knowledge and expertise with others. I take great pride in
              mentoring 25 students at{" "}
              <a href="https://ju.edu.et/jit/">
                Jimma Institute of Technology{" "}
              </a>{" "}
              , guiding them in their web development aspirations. In addition,
              I had the wonderful opportunity to train 50 high school students
              in basic web development at Eldan Secondary School in Jimma town,
              a fulfilling experience that reinforced my passion for teaching
              and empowering others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
