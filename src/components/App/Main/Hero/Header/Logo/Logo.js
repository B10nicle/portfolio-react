import React, {useState} from "react";
import logo from "../../../../../../images/logo.png";
import Popup from "../../../Hero/Header/Logo/Popup/Popup";

export default function Logo() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  function handleClick() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    openPopup();
  }

  return (
    <>
      <img
        className="header__logo opacity"
        onClick={handleClick}
        src={logo}
        alt="cow"
      />
      {isPopupOpen && <Popup onClose={closePopup} />}
    </>
  );
}
