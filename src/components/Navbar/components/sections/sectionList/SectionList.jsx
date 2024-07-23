import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SectionList.scss";
import SectionListItems from "./SectionListItems";
import SignModal from "../modal/SignModal";

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
  const [visible, setVisible] = useState(false);

  const handleModal = () => {
    setVisible(!visible);
  };
  const handleExit = () => {
    setVisible(false);
  };
  return (
    <nav className="sectionListMain">
      <ul className="sectionListItems">
        {sections.map((item) => (
          <SectionListItems title={item.title} path={item.path} />
        ))}
        <li>
          <Link to="">
            <button onClick={handleModal}>Get Started</button>
          </Link>
        </li>
      </ul>
      <SignModal visible={visible} handleExit={handleExit}/>
    </nav>
  );
}
