import React from "react";
import { Link } from "react-router-dom";

export default function SectionListItems({ title, path }) {
  return (
    <li className="sectionListItem">
      <Link to={path}>{title}</Link>
    </li>
  );
}
