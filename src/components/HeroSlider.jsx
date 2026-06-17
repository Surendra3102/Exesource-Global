import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./HeroSlider.css";

import slide1 from "../assets/slide-team.jpg";
import slide2 from "../assets/slide-careers.jpg";
import slide3 from "../assets/slide-podcast.jpg";

import arrows from "../assets/arrow-pattern.png";
import dots from "../assets/dot-pattern.png";

import spotify from "../assets/spotify.png";
import apple from "../assets/apple-podcast.png";
import amazon from "../assets/amazon-music.png";

function HeroSlider() {
  return (
    <Swiper
      modules={[
        Pagination,
        Autoplay,
        EffectFade,
      ]}
      effect="fade"
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      className="hero-swiper"
    >
      {/* Slide 1 */}

      <SwiperSlide>
        <section
          className="hero-slide"
          style={{
            backgroundImage: `url(${slide1})`,
          }}
        >
          <img
            src={arrows}
            alt=""
            className="arrow-pattern"
          />

          <img
            src={dots}
            alt=""
            className="dot-pattern"
          />

          <div className="hero-content team-mobile">
            <h2>TRANSFORMING</h2>

            <h2>YOUR TEAM TO AN</h2>

            <h1>A-TEAM</h1>

            <button>
              Know More
            </button>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 2 */}

      <SwiperSlide>
        <section
          className="hero-slide"
          style={{
            backgroundImage: `url(${slide2})`,
          }}
        >
          <img
            src={arrows}
            alt=""
            className="arrow-pattern"
          />

          <img
            src={dots}
            alt=""
            className="dot-pattern"
          />

          <div className="hero-content mobile-careers">
            <h2>FIND YOUR FIT</h2>

            <h2>IN AN</h2>

            <h1>A-TEAM</h1>

            <button>
              Explore Careers
            </button>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 3 */}

      <SwiperSlide>
        <section
          className="hero-slide"
          style={{
            backgroundImage: `url(${slide3})`,
          }}
        >
          <img
            src={arrows}
            alt=""
            className="arrow-pattern"
          />

          <img
            src={dots}
            alt=""
            className="dot-pattern"
          />

          <div className="hero-content podcast-content">
            <h2 className="orange">
              The latest on
            </h2>

            <h2 className="orange">
              Indian GCCs:
            </h2>

            <p>
              Talent insights,
              leadership trends
              and more!
            </p>

            <p className="small-text">
              Tune in to listen to our
              leaders on the GCC Talent
              podcast.
            </p>

            <div className="platforms">
              <img
                src={spotify}
                alt=""
              />

              <img
                src={apple}
                alt=""
              />

              <img
                src={amazon}
                alt=""
              />
            </div>

            <button>
              Listen Here
            </button>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;