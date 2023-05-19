import React from "react";
import {locale} from "../../../../../../utils/locale/locale";
import {Link} from "react-scroll";

function NavigationList() {
  return (
    <ul className="header__navigation-list">
      <li className="header__navigation-list__item opacity my-projects">
        <Link to="projects" smooth={true}>Projects</Link>
      </li>
      <li className="header__navigation-list__item opacity my-certificates">
        <Link to="certificates" smooth={true}>Certificates</Link>
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
