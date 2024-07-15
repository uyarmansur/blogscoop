import React from "react";
import CardCommon from "../../../Common/Card/CardCommon";
import pp from "../../Images/adam.jpg";
import "./Card.scss";
const people = [
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName: "aç adam",
    title: "The 4 Hats of a Full-Stack Data Scientist",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName: "aç adam",
    title: "The 4 Hats of a Full-Stack Data Scientist",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName: "aç adam",
    title: "The 4 Hats of a Full-Stack Data Scientist",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName: "aç adam",
    title: "The 4 Hats of a Full-Stack Data Scientist",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName: "aç adam",
    title: "The 4 Hats of a Full-Stack Data Scientist",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName: "aç adam",
    title: "The 4 Hats of a Full-Stack Data Scientist",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
  },
];

function Card() {
  return (
    <div className="cardMain">
      {people.map((item, index) => (
        <CardCommon
          className="trendingCardMain"
          index={"0" + (index + 1)}
          pp={item.pp}
          name={item.name}
          hoveredName={item.hoveredName}
          title={item.title}
          date={item.date}
          seen={item.seen}
        />
      ))}
    </div>
  );
}

export default Card;
