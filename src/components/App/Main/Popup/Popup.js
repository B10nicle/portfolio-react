import React from "react";
import cows from "../../../../images/cows.png";

function Popup() {
  return (
    <div className="popup">
      <div className="popup__container">
        <button
          className="popup__container__close-button opacity"
          type="button"
        />
        <img
          className="popup__container__cows"
          src={cows}
          alt="cows"
        />
        <div className="popup__container__wrapper"/>
        <h2 className="popup__container__title">Cows pwned you!</h2>
        <p className="popup__container__subtitle">
          You&apos;re not the first one, you&apos;re not the last one ;)
        </p>
      </div>
    </div>
  );
}

export default Popup;
