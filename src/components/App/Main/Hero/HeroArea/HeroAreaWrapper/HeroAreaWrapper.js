import React from "react";
import {Link} from "react-scroll";

export default function HeroAreaWrapper() {
  return (
    <div className="hero-area__wrapper">
      <h1 className="hero-area__wrapper__name">Oleg Khilko</h1>
      <p className="hero-area__wrapper__profession">Full Stack Developer</p>
      <div className="hero-area__wrapper__button opacity link">
        <Link to="about-me" smooth={true}>About me</Link>
      </div>
    </div>
  );
}
