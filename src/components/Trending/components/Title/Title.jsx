import React from "react";
import { IoIosTrendingUp } from "react-icons/io";
import './Title.scss'
function Title() {
  return (
    <div className="titleMain">
      <span className="iconContainer">
        <IoIosTrendingUp className="icon"/>
      </span>
      <span >Trending On Medium</span>
    </div>
  );
}

export default Title;
