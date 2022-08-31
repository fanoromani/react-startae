import { Card } from "../Card/card";
import "./content.scss";

const people = [
  {
    name: "Stefano Romani",
    picture: "https://picsum.photos/id/1/200/300",
    social: "@fanoromani",
    role: "Junior Dev",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Vitu Bicha",
    picture: "https://picsum.photos/id/116/200/300",
    social: "@bicharrara",
    role: "Senior Dev",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/id/321/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/id/115/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/id/161/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/id/124/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/id/235/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/id/63/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/id/31/200/300",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "https://picsum.photos/id/2/200/300",
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
