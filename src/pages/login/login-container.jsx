import React from "react";
import "./login.scss";
import SignIn from "./sign_in";
import SignUp from '../../components/signup/signup.jsx'
export default function Login() {
  return (
    <div className="login-page">
      <SignIn />
      <SignUp />
    </div>
  );
}
