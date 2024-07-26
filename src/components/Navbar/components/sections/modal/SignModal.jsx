import React, { useState } from "react";
import "./SignModal.scss";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
function SignModal({ visible, handleExit }) {

  const [page, setPage] = useState(1);

  const handlePageOne = () => {
    setPage(2)
  };

  const handlePageTwo = () => {
    setPage(1);
  };

  return (
    <div className={`container ${visible ? "visible" : ""}`}>
      <div className="modalContainer">
        {page === 1 ? (
          <SignUp handleExit={handleExit} handlePageOne={handlePageOne} />
        ) : (
          <SignIn handleExit={handleExit} handlePageTwo={handlePageTwo} />
        )}
      </div>
    </div>
  );
}

export default SignModal;
