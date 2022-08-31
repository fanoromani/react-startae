import "./card.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function Card({ name, social, role, picture, quote }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={picture} alt="Profile Picture" />
      </div>
      <div className="card__name">{name}</div>
      <div className="card__social">{social}</div>
      <div className="card__role">{role}</div>
      <div className="card__quote">{quote}</div>
      <div className="card__like">
        <FontAwesomeIcon icon={faHeart} />
        <span>1</span>
      </div>
    </div>
  );
}
