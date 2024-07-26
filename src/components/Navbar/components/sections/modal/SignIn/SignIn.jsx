import React, { useState } from "react";
import "./SignIn.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../../../api/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  ErrorMessage,
  SuccessMessage,
} from "../../../../../../SweetAlert/SweetAlert";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("No password Provided!")
      .min(6, "Minimum 6 characters!"),
  })
  .required();

function SignIn({ handlePageTwo, handleExit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    login(email, password)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          localStorage.setItem("accessToken", data.data.accessToken);
          SuccessMessage("Login is successful", "Continue");
          navigate("/user-main");
        } else {
          ErrorMessage(data.message, "Try Again");
        }
      });
  };

  return (
    <div className="signInContainer">
      <div className="signBody">
        <h2 style={{ textAlign: "center" }}>WELCOME TO BLOGSCOOP</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formInput">
            <label htmlFor="email">user mail</label>
            <input {...register("email")} onChange={handleEmailChange} />
            <p style={{ color: "red", fontSize: "0.7rem", marginTop: "3px" }}>
              {errors.email?.message}
            </p>
          </div>

          <div className="formInput">
            <label htmlFor="password">user password</label>
            <input {...register("password")} onChange={handlePasswordChange} />
            <p style={{ color: "red", fontSize: "0.7rem", marginTop: "3px" }}>
              {errors.password?.message}
            </p>
          </div>
          <input value="Sign In" type="submit" className="signContainer green" style={{fontSize:'1rem'}}/>
        </form>
        <div>
          <div className="signContainer">
            <FaGoogle className="signUpIcon" />
            <p>Sign in with Google</p>
          </div>
          <div className="signContainer">
            <FaFacebook className="signUpIcon" />
            <p>Sign in with Facebook</p>
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
