import React from "react";
import "./SignIn.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function SignIn({ handlePageTwo, handleExit }) {
  return (
    <div className="signInContainer">
      <div className="signBody">
        <h2 style={{ textAlign: "center" }}>WELCOME TO BLOGSCOOP</h2>
        <form>
          <div className="formInput">
            <label htmlFor="name">user mail</label>
            <input type="text" name="name" />
            <p className="error">Bu alan zorunludur.</p>
          </div>
         
          <div className="formInput">
            <label htmlFor="password">user password</label>
            <input type="password" name="password" />
            <p className="error">Bu alan zorunludur</p>
          </div>
          
        </form>
        <div>
          <div className="signContainer green">Sign In</div>
          <div className="signContainer">
            <FaGoogle className="signUpIcon" />
            <p>Sign in with Google</p>
          </div>
          <div className="signContainer">
            <FaFacebook className="signUpIcon" />
            <p>Sign in with Facebook</p>
          </div>
          <div className="signContainer">
            <MdOutlineMailOutline className="signUpIcon" />
            <p>Sign in with Email</p>
          </div>
        </div>
        <div>
          <p>
            Don't you have an account?
            <span
              style={{
                color: "green",
                fontWeight: "500",
                cursor: "pointer",
                paddingLeft: "10px",
              }}
              onClick={handlePageTwo}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        Forgot Password?{" "}
        <span>
          <a href="#" style={{ color: "black" }}>
            {" "}
            <i>Get Help</i>
          </a>
        </span>
      </p>
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

export default SignIn;
