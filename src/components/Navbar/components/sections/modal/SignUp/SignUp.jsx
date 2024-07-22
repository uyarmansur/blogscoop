import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "./SignUp.scss";
function SignUp() {
  return (
    <div className="signUpContainer">
      <div className="signBody">
        <div style={{textAlign:'center'}}>Join BlogScoop</div>
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
            <span style={{ color: "green", fontWeight: "500" }}>    Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
