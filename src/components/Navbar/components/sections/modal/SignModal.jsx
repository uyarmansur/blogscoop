import React from "react";
import "./SignModal.scss";
import SignUp from "./SignUp/SignUp";
function SignModal({ visible }) {
  console.log(visible);
  return (
    <div className={`container ${visible ? "visible" : ""}`}>
      <div className="modalContainer">
        <SignUp />
      </div>
    </div>
  );
}

export default SignModal;
