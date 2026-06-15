import "./Footer.css";

import bg from "../assets/footer-bg.jpg";

import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/Insta.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import podbean from "../assets/Podbean-website-logo.png";

import location from "../assets/location.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

import bullet from "../assets/Bullet.png";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-links">

          <h4>Home</h4>

          <h4>Services</h4>

          <ul>

            <li>
              <img src={bullet} alt="" />
              IT Staffing
            </li>

            <li>
              <img src={bullet} alt="" />
              Engineering Staffing
            </li>

            <li>
              <img src={bullet} alt="" />
              Sales Staffing
            </li>

            <li>
              <img src={bullet} alt="" />
              Direct Hiring - Functions
            </li>

            <li>
              <img src={bullet} alt="" />
              Direct Hiring - IT
            </li>

            <li>
              <img src={bullet} alt="" />
              Executive Search
            </li>

          </ul>

          <h4>Xpheno in the News</h4>

          <ul>

            <li>
              <img src={bullet} alt="" />
              Media Mentions
            </li>

            <li>
              <img src={bullet} alt="" />
              Media Stories
            </li>

            <li>
              <img src={bullet} alt="" />
              Authored Articles
            </li>

          </ul>

          <h4>Blogs</h4>
          <h4>Research</h4>
          <h4>About Us</h4>

        </div>

        {/* CENTER */}

        <div className="footer-center">

          <h4>Tag Us</h4>

          <p>#Specialiststaffing</p>
          <p>#PeopleEffectChange</p>
          <p>#XphenoJobs</p>
          <p>#Xpheno</p>
          <p>#WorkplaceDynamics</p>

          <h4 className="location-title">
            Locate Us
          </h4>

          <div className="address-box">

            <img
              src={location}
              alt=""
            />

            <div>
              <h5>Xpheno Pvt Ltd</h5>

              <p>
                Hyderabad,
                Telangana,
                India
              </p>
            </div>

          </div>

          <div className="contact-info">

            <div>
              <img
                src={phone}
                alt=""
              />

              <span>
                +91 9876543210
              </span>
            </div>

            <div>
              <img
                src={mail}
                alt=""
              />

              <span>
                info@exesourceglobal.com
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="footer-form">

          <div className="social-icons">

            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedin} alt="" />
            <img src={podbean} alt="" />

          </div>

          <h2>
            Let's plan the game
          </h2>

          <form>

            <input
              type="text"
              placeholder="Name"
            />

            <input
              type="text"
              placeholder="Designation"
            />

            <input
              type="text"
              placeholder="Company"
            />

            <input
              type="text"
              placeholder="Domain"
            />

            <input
              type="email"
              placeholder="Email ID"
            />

            <button>
              Let's win
            </button>

          </form>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Exesource Global Pvt Ltd
      </div>

    </footer>
  );
}

export default Footer;