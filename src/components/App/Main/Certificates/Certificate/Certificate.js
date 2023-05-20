import React, {useState} from "react";
import Zoom from "./Zoom/Zoom";

export default function Certificate(card) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  function handleClick() {
    openPopup();
  }

  return (
    <>
      <img
        className="certificates__card__item"
        src={card.image}
        alt={card.title}
        onClick={handleClick}
      />
      {isPopupOpen && <Zoom onClose={closePopup} card={card}/>}
    </>
  );
}
