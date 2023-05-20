import React, {useEffect} from "react";
import cows from "../../../../../../../images/cows.png";

export default function Popup({onClose}) {
  const handleClose = () => onClose();

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("popup")) handleClose();
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
    <div className="popup" onClick={handleOverlayClick}>
      <div className="popup__container">
        <button
          className="popup__container__close-button opacity"
          onClick={handleClose}
          type="button"
        />
        <img
          className="popup__container__image"
          src={cows}
          alt="cows"
        />
        <div className="popup__container__wrapper">
          <h2 className="popup__container__title">Cows pwned you!</h2>
          <p className="popup__container__subtitle">
            You&apos;re not the first one, you&apos;re not the last one ;)
          </p>
        </div>
      </div>
    </div>
  );
}
