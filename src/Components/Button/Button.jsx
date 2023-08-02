import "./Button.css";
import { Link } from "react-router-dom";
const Button = ({ onClick }) => {
  return (
    <button className="contact-link" onClick={onClick}>
      {" "}
      Download Resume
    </button>
  );
};

export default Button;
