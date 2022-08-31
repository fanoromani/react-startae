import { Card } from "../Card/card";
import "./content.scss";

const people = [
  {
    name: "Stefano Romani",
    picture: "https://picsum.photos/200/300",
    social: "@fanoromani",
    role: "Junior Dev",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Vitu Bicha",
    picture: "https://picsum.photos/200/300",
    social: "@bicharrara",
    role: "Senior Dev",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
];

export function Container() {
  return (
    <main class="main-content">
      <div class="diagonal"></div>
      <div class="cards">
        {people.map((card) => (
          <Card
            name={card.name}
            social={card.social}
            role={card.role}
            picture={card.picture}
            quote={card.quote}
          />
        ))}
      </div>
    </main>
  );
}
