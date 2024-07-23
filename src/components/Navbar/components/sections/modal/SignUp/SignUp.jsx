import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "./SignUp.scss";
function SignUp({ handleExit, handlePageOne }) {

  return (
    <div className="signUpContainer">
      <div className="signBody">
        <h2 style={{ textAlign: "center" }}>JOIN BLOGSCOOP</h2>
        <div>
          <div className="signContainer">
            <FaGoogle className="signUpIcon" />
            <p>Sign up with Google</p>
          </div>
          <div className="signContainer">
            <FaFacebook className="signUpIcon" />
            <p>Sign up with Facebook</p>
          </div>
          <div className="signContainer">
            <MdOutlineMailOutline className="signUpIcon" />
            <p>Sign up with Email</p>
          </div>
        </div>
        <div>
          <p>
            Already have an account?
            <span
              style={{
                color: "green",
                fontWeight: "500",
                cursor: "pointer",
                paddingLeft: "10px",
              }}
              onClick={handlePageOne}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
      <div className="signBottom">
        <p>
          By signing up, you agree to our Terms, Data Policy and Cookies Policy.
        </p>
      </div>
      <div className="exitButton" onClick={handleExit}>
        X
      </div>
    </div>
  );
}

export default SignUp;
