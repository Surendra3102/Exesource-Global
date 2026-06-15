import "./Services.css";

import it from "../assets/service-it.png";
import engineering from "../assets/service-engineering.png";
import sales from "../assets/service-sales.png";
import directIT from "../assets/service-direct-it.png";
import functions from "../assets/service-functions.png";
import executive from "../assets/service-executive.png";

const services = [
  {
    image: it,
    title: "IT Staffing",
  },
  {
    image: engineering,
    title: "Engineering Staffing",
  },
  {
    image: sales,
    title: "Sales Staffing",
  },
  {
    image: directIT,
    title: "Direct Hiring - IT",
  },
  {
    image: functions,
    title: "Direct Hiring - Functions",
  },
  {
    image: executive,
    title: "Executive Search",
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
          >
            <img
              src={service.image}
              alt={service.title}
            />

            <h3>{service.title}</h3>

            <button>
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;