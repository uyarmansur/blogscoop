import React from "react";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";

function Trending() {
  return (
    <div style={{ borderBottom: "1px solid rgba(0, 0, 0, .1)" }}>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1200px",
          marginTop: "30px",
          marginBottom:'30px',
          padding: "18px",
        }}
      >
        <Title />
        <Card />
      </div>
    </div>
  );
}

export default Trending;
