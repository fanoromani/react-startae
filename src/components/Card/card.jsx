import "./card.scss";

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
        <i className="fas fa-heart"></i> 1
      </div>
    </div>
  );
}
