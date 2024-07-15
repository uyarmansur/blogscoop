import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../images/logo.webp";
import SectionList from "../sections/sectionList/SectionList";

import { Link } from "react-router-dom";
export default function Header() {
  const [color, setColor] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setColor(true);
      } else {
        setColor(false);
      }
    });
  }, [color]);
  return (
    <header className={color ? "headerMain bgWhite" : "headerMain"}>
      <div className="headerContainer">
        <Link to="/">
          <img src={logo} alt="#" width="200px" height="50px" />
        </Link>
        <SectionList />
      </div>
    </header>
  );
}
