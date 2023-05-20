import React, {useEffect} from "react";

export default function Zoom({onClose, card}) {
  const handleClose = () => onClose();

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("zoom")) handleClose();
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") handleClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="zoom" onClick={handleOverlayClick}>
      <div className="zoom__container">
        <img
          className="zoom__container__image"
          src={card.image}
          alt={card.title}
        />
      </div>
    </div>
  );
}
