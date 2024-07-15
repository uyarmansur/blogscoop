import React from "react";
import { Link } from "react-router-dom";

import "./SectionList.scss";
import SectionListItems from "./SectionListItems";

const sections = [
  {
    title: "Our Story",
    path: "ourStory",
  },
  {
    title: "Membership",
    path: "membership",
  },
  {
    title: "Write",
    path: "write",
  },
  {
    title: "Sign In",
    path: "signIn",
  },
];

export default function SectionList() {
  return (
    <nav className="sectionListMain">
      <ul className="sectionListItems">
        {sections.map((item) => (
          <SectionListItems title={item.title} path={item.path} />
        ))}
        <li>
          <Link to="">
            <button>Get Started</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
