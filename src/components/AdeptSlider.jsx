import { useEffect, useState } from "react";
import "./AdeptSlider.css";

import slide1 from "../assets/adept-rowing.jpg";
import slide2 from "../assets/adept-rafting.jpg";
import slide3 from "../assets/adept-skydiving.jpg";

import arrows from "../assets/arrow-pattern.png";

const images = [
  slide1,
  slide2,
  slide3,
];

const words = [
  "PPROACHABLE",
  "CTION",
  "MBITIOUS",
  "DVENTUROUS",
  "UTHENTIC",
];

function AdeptSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % images.length
      );
    }, 5000);

    return () =>
      clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord(
        (prev) => (prev + 1) % words.length
      );
    }, 2000);

    return () =>
      clearInterval(wordInterval);
  }, []);

  return (
    <section
      className="adept-section"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Overlay */}

      <div className="dark-overlay"></div>

      {/* Content */}

      <div className="adept-content">
        <h3>Be part of an</h3>

        <div className="word-row">
          <span className="static-a">
            A
          </span>

          <span
            key={words[currentWord]}
            className="dynamic-word"
          >
            {words[currentWord]}
          </span>
        </div>

        <div className="team-text">
          TEAM
        </div>

        <button>
          Join Us
        </button>
      </div>

      {/* Arrow Pattern */}

      <div className="arrow-decoration">
        <img
          src={arrows}
          alt="Arrow Pattern"
          className="arrow-pattern"
        />

        <div className="arrow-glow"></div>
      </div>
    </section>
  );
}

export default AdeptSlider;