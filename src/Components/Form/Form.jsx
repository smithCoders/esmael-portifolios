import { useState } from "react";
import "../Button/Button.css";
import styles from "./Form.module.css";
const initialValues = {
  name: "",
  email: "",
  message: "",
};
const Form = () => {
  const [formData, setFormData] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({ ...prevForm, [name]: value }));
  };
  // handle submission
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialValues);
  };
  return (
    <div className={styles.section} id="contact">
      <div className="containers ">
        <h2 className="subheading ">Get in touch with me</h2>
      </div>
      <div className="containers ">
        <div className={styles.contact}>
          <div className={styles.ctaText}>
            <h2 className={styles.hello}>just say me Hello...</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              provident incidunt repellendus quis officia non sit illo nihil
              perferendis temporibus?
            </p>
            <form action="" className={styles.form} onSubmit={handleSubmission}>
              <div className={styles.grid}>
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="esmael"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="esmaelabd@gmail.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name">Message</label>

                <textarea
                  name="message"
                  id="meesage"
                  cols="15"
                  rows="7"
                  required
                  placeholder="Hey their........"
                  className={styles.textarea}
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
              <div className={styles.btnBox}>
                <button className="contact-link" type="submit">
                  submit
                </button>
              </div>
            </form>
          </div>
          <div className={styles.ctaImg}></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
