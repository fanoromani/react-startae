import "./header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="header">
      <a className="header__top" href="/">
        <div className="header__top__brand">Startaê</div>
        <FontAwesomeIcon icon={faEye} />
      </a>

      <div className="header__main">
        <h1 className="header__main__title">Meet our team</h1>
        <div className="header__main__subtitle">
          We are a group of multi-skilled individuals who are entrepreneurial by
          nature and live to make digital products and services that people love
          to use.
        </div>
      </div>
      <div className="header__bottom">
        <i className="fab fa-twitter"></i>
        <div className="header__bottom__text">Latest tweets from our team</div>
      </div>
    </header>
  );
}
