import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className="global-section">
      <div className="containers">
        <h2 className="headerSecondary  subheading">
          Testimonials from Team mates
        </h2>
      </div>
      <div className={`${styles.testimonials} containers`}>
        <div className={styles.flex}>
          <img
            src="../../../../assets/adrica-man.jpg"
            alt=""
            className={styles.img}
          />
          <h3 className={styles.title}>app developer</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            molestiae tenetur, quaerat veniam exercitationem ullam quo dolores
            minus. Culpa, officiis.
          </p>
        </div>
        <div className={styles.flex}>
          {" "}
          <img
            src="../../../../assets/adrica-man.jpg"
            alt=""
            className={styles.img}
          />
          <h3 className={styles.title}>full stack developer </h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            molestiae tenetur, quaerat veniam exercitationem ullam quo dolores
            minus. Culpa, officiis.
          </p>
        </div>
        <div className={styles.flex}>
          {" "}
          <img
            src="../../../../assets/adrica-man.jpg"
            alt=""
            className={styles.img}
          />
          <h3 className={styles.title}>front end developer </h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            molestiae tenetur, quaerat veniam exercitationem ullam quo dolores
            minus. Culpa, officiis.
          </p>
        </div>
        <div className={styles.flex}>
          {" "}
          <img
            src="../../../../assets/adrica-man.jpg"
            alt=""
            className={styles.img}
          />
          <h3 className={styles.title}>front end developer </h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            molestiae tenetur, quaerat veniam exercitationem ullam quo dolores
            minus. Culpa, officiis.
          </p>
        </div>
        <div className={styles.flex}>
          {" "}
          <img
            src="../../../../assets/adrica-man.jpg"
            alt=""
            className={styles.img}
          />
          <h3 className={styles.title}>front end developer </h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            molestiae tenetur, quaerat veniam exercitationem ullam quo dolores
            minus. Culpa, officiis.
          </p>
        </div>
        <div className={styles.flex}>
          {" "}
          <img
            src="../../../../assets/adrica-man.jpg"
            alt=""
            className={styles.img}
          />
          <h3 className={styles.title}>front end developer </h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            molestiae tenetur, quaerat veniam exercitationem ullam quo dolores
            minus. Culpa, officiis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
