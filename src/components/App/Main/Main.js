import React from "react";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Certificates from "./Certificates/Certificates";
import Footer from "./Footer/Footer";

export default function Main() {
  return (
    <div className="main">
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Certificates/>
      <Footer/>
    </div>
  );
}
