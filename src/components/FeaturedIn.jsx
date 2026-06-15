import "./FeaturedIn.css";

import businessLine from "../assets/Business-Line-bw.png";
import liveMint from "../assets/live-mint.png";
import economicTimes from "../assets/Economic-times.png";
import moneyControl from "../assets/Money-control.png";
import toi from "../assets/Times-of-India.png";

function FeaturedIn() {
  return (
    <section className="featured-section">

      <h2>FEATURED IN</h2>

      <div className="featured-logos">

        <img src={businessLine} alt="Business Line" />

        <img src={liveMint} alt="Live Mint" />

        <img src={economicTimes} alt="Economic Times" />

        <img src={moneyControl} alt="Money Control" />

        <img src={toi} alt="Times Of India" />

      </div>

      <button>
        View More
      </button>

      <p>
        We are D&B verified
      </p>

    </section>
  );
}

export default FeaturedIn;