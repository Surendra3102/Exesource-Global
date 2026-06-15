import "./TeamCards.css";

import leftImage from "../assets/team-left.jpg";
import rightImage from "../assets/team-right.jpg";

function TeamCards() {
  return (
    <section className="team-section">

      {/* LEFT CARD */}

      <div
        className="team-card left-card"
        style={{
          backgroundImage: `url(${leftImage})`,
        }}
      >
        <div className="overlay dark"></div>

        <div className="card-content">
          <p>Don't put together a team.</p>

          <h2>
            PUT TOGETHER
            <br />
            YOUR A-TEAM
          </h2>

          <button>
            Find People
          </button>
        </div>
      </div>

      {/* RIGHT CARD */}

      <div
        className="team-card right-card"
        style={{
          backgroundImage: `url(${rightImage})`,
        }}
      >
        <div className="overlay light"></div>

        <div className="card-content dark-text">
          <p>Don't be part of a team.</p>

          <h2>
            BE PART OF
            <br />
            AN A-TEAM
          </h2>

          <button className="outline-btn">
            Explore Careers
          </button>
        </div>
      </div>

    </section>
  );
}

export default TeamCards;