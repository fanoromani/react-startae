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
    picture: "",
    social: "@bicharrara",
    role: "Senior Dev",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "",
    social: "@rafaeltorales",
    role: "Designer",
    quote:
      "I crunched the data from every episode of Netflix's Ultimate Beastmaster",
  },
  {
    name: "Rafael Torales",
    picture: "",
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
        <Card
          name={people[0].name}
          social={people[0].social}
          role={people[0].role}
          picture={people[0].picture}
          quote={people[0].quote}
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
