import React from "react";
import "./Navbar.scss";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
function Navbar() {
  return (
    <div className="navMain">
      <Header />
      <div className="navContainer">
        <Banner />
      </div>
    </div>
  );
}

export default Navbar;
