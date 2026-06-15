import { useState } from "react";
import "./SideMenu.css";

const menuData = [
  {
    title: "FIND PEOPLE",
    submenu: [
      "IT Staffing",
      "Engineering Staffing",
      "Sales Staffing",
      "Executive Search",
    ],
  },
  {
    title: "XPHENO IN THE NEWS",
    submenu: [
      "Latest News",
      "Press Releases",
      "Media Coverage",
      "Industry Updates",
    ],
  },
  {
    title: "RESOURCES",
    submenu: [
      "Blogs",
      "Research",
      "Case Studies",
      "White Papers",
    ],
  },
  {
    title: "XPHENO'S STORY",
    submenu: [
      "About Us",
      "Leadership Team",
      "Our Journey",
      "Culture",
    ],
  },
  {
    title: "CONTACT",
    submenu: [
      "Contact Us",
      "Locations",
      "Support",
      "Careers",
    ],
  },
];

function SideMenu({ isOpen, closeMenu }) {
  const [active, setActive] = useState(null);

  const toggleMenu = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <div
        className={`overlay ${
          isOpen ? "show-overlay" : ""
        }`}
        onClick={closeMenu}
      />

      <div
        className={`side-menu ${
          isOpen ? "menu-open" : ""
        }`}
      >
        <button
          className="close-btn"
          onClick={closeMenu}
        >
          ✕
        </button>

        <div className="menu-wrapper">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className="menu-item"
            >
              <div
                className="menu-header"
                onClick={() =>
                  toggleMenu(index)
                }
              >
                <span>{menu.title}</span>

                <span className="arrow">
                  {active === index
                    ? "⌄"
                    : "›"}
                </span>
              </div>

              {active === index && (
                <div className="submenu">
                  {menu.submenu.map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="submenu-item"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideMenu;