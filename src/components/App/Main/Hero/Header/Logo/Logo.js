import React from "react";
import logo from "../../../../../../images/logo.png";

function Logo() {
  function handleClick() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  return (
    <img
      className="header__logo opacity popup__open"
      onClick={handleClick}
      src={logo}
      alt="cow"
    />
  );
}

export default Logo;
