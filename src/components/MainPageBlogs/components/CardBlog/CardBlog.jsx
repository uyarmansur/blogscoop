import React from "react";
import img from "../../Images/blogImg.webp";
import pp from "../../../Trending/Images/adam.jpg";
import CardCommon from "../../../Common/Card/CardCommon";
import "./CardBlog.scss"
const people = [
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
  {
    pp: pp,
    name: "AÇ ADAM",
    hoveredName:"aç adam",
    title: "Everything I Know About Creating Buzz, I Learned From Taylor Swift",
    comment:
      "A roundup of typefaces with interesting stories I’ve found from scouting the internet.",
    date: "Apr 17, 2024 ·",
    seen: "7 min read",
    img: img,
  },
];

function CardBlog() {
  return (
    <div className="cardBlogContainer">
      {people.map((item, index) => (
        <CardCommon
          className="cardBlog"
          pp={item.pp}
          name={item.name}
          hoveredName={item.hoveredName}
          title={item.title}
          comment={item.comment}
          date={item.date}
          seen={item.seen}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default CardBlog;
