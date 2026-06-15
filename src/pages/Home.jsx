import { useState } from "react";

import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import HeroSlider from "../components/HeroSlider";
import TeamCards from "../components/TeamCards";
import Services from "../components/Services";
import AdeptSlider from "../components/AdeptSlider";
import BlogSection from "../components/BlogSection";
import CVSection from "../components/CVSection";
import FeaturedIn from "../components/featuredIn";
import Footer from "../components/Footer";

function Home() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <>
      <Navbar
        openMenu={() =>
          setMenuOpen(true)
        }
      />

      <SideMenu
        isOpen={menuOpen}
        closeMenu={() =>
          setMenuOpen(false)
        }
      />

      <HeroSlider />
      <TeamCards/>
      <Services/>
      <AdeptSlider/>
      <BlogSection/>
      <CVSection/>
      <FeaturedIn/>
      <Footer/>
    </>
  );
}

export default Home;