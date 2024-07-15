import React from "react";

function Badge({ title, color, backgroundColor }) {
  return (
    <div
      style={{
        padding: "5px 10px",
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: "25px",
      }}
    >
      {title}
    </div>
  );
}

export default Badge;
