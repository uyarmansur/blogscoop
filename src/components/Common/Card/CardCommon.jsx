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
        <span className="popUp">
          <span className="cardHeader">
            <img src={pp} alt="#" className="pp" />
            <span>{name}</span>
            <span className="hoverPopUp">
              <span className="hoverCardHeader">
                <img src={pp} alt="#" className="pp" />
                <span>{name}</span>
              </span>
              <p
                style={{
                  borderBottom: "1px solid grey",
                  paddingBottom: "10px",
                }}
              >
                Data Scientist | PhD, Physics | Editor for The Data
                Entrepreneurs
              </p>
              <div className="hoverBottom">
                <p>21k followers</p>
                <Badge title="follow" color="white" backgroundColor="green" />
              </div>
            </span>
          </span>
        </span>
        <h3 className="cardTitle">{title}</h3>
        {comment ? <div className="cardComment">{comment}</div> : ""}
        <div className="cardBottom">
          <span className="date">{date}</span>
          <span className="seen">{seen}</span>
        </div>
      </div>
      {img && <img src={img} alt="#" className="img" />}
    </div>
  );
}

export default CardCommon;
