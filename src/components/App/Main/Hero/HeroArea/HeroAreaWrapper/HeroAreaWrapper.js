import React from "react";

function HeroAreaWrapper() {
  function handleClick() {
    window.location.href = '#about-me';
  }

  return (
    <div className="hero-area__wrapper">
      <h1 className="hero-area__wrapper__name">Oleg Khilko</h1>
      <p className="hero-area__wrapper__profession">Full Stack Developer</p>
      <div className="hero-area__wrapper__button opacity link"
           onClick={handleClick}>
        <a>About me</a>
      </div>
    </div>
  );
}

export default HeroAreaWrapper;
