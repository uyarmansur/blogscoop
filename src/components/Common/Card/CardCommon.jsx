import React from "react";
import "./Card.scss";
import Badge from "../Badge/Badge";
function CardCommon({
  className,
  index,
  pp,
  name,
  comment,
  title,
  date,
  seen,
  img,
  hoveredName,
}) {
  return (
    <div className={className}>
      {index ? <div className="index">{index}</div> : ""}
      <div className="cardBody">
        <div className="cardHeader">
          <img src={pp} alt="#" className="pp" />
          <h6>{name}</h6>
        </div>
        <span className="hoverPopUp">
          {" "}
          <div className="hoverCardHeader">
            <img src={pp} alt="#" className="pp" />
            <h6>{name}</h6>
          </div>
          <p style={{ borderBottom: "1px solid grey", paddingBottom: "10px" }}>
            Data Scientist | PhD, Physics | Editor for The Data Entrepreneurs
          </p>
          <div className="hoverBottom">
            <p>21k followers</p>
            <Badge title="follow" color="white" backgroundColor="green" />
          </div>
        </span>
        <div className="cardTitle">{title}</div>
        {comment ? <div className="cardComment">{comment}</div> : ""}
        <div className="cardBottom">
          <span className="date">{date}</span>
          <span className="seen">{seen}</span>
        </div>
      </div>
      {img && (
        <div>
          <img src={img} alt="#" className="img" />
        </div>
      )}
    </div>
  );
}

export default CardCommon;
