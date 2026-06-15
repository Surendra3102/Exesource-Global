import "./CVSection.css";
import arrowPattern from "../assets/arrow-pattern.png";

function CVSection() {
  return (
    <section className="cv-section">

      <img
        src={arrowPattern}
        alt=""
        className="left-arrow"
      />

      <div className="cv-content">
        <h2>
          What's your track record?
        </h2>

        <button>
          Drop your CV
        </button>
      </div>

      <img
        src={arrowPattern}
        alt=""
        className="right-arrow"
      />

    </section>
  );
}

export default CVSection;