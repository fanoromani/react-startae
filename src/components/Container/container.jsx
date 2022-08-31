import { Card } from "../Card/card";
import people from "../../data/people";
import "./content.scss";

export function Container() {
  return (
    <main class="main-content">
      <div class="diagonal"></div>
      <div class="cards">
        {people.map(({ name, social, role, picture, quote }) => (
          <Card
            name={name}
            social={social}
            role={role}
            picture={picture}
            quote={quote}
          />
        ))}
      </div>
    </main>
  );
}
