import React from "react";
import {locale} from "../../../../../../utils/locale/locale";

function NavigationList() {
  function handleClickProjects() {
    window.location.href = '#projects';
  }

  function handleClickCertificates() {
    window.location.href = '#certificates.js';
  }

  return (
    <ul className="header__navigation-list">
      <li className="header__navigation-list__item opacity my-projects"
          onClick={handleClickProjects}>
        <a>Projects</a>

      </li>
      <li className="header__navigation-list__item opacity my-certificates"
          onClick={handleClickCertificates}>
        <a>Certificates</a>
      </li>
      <li className="link">
        <button
          className="locale opacity"
          onClick={locale}
          type="button"
        />
      </li>
    </ul>
  );
}

export default NavigationList;
