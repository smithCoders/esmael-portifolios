import { useState } from "react";
import "./Card.css";
const Card = ({ title, details, image }) => {
  const [flipped, setFlipped] = useState(false);
  const handleCardClick = (e) => {
    e.stopPropagation();
    setFlipped(!flipped);
  };

  return (
    <section>
      <div
        className={`card ${flipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="frontSide cardside">
          <div className="bgImg" style={{ backgroundImage: `url(${image})` }}>
            &nbsp;
          </div>
          <h4 className="heading">
            <span className="headingSpan"> {title}</span>
          </h4>

          <div className="details">
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="backside cardside">
          <a role="button" className="btn  bg-slate-200 text-slate-600">
            Learn More{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
