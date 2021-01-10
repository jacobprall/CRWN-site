import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import { CustomButton } from "../custom-button/custom-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./signup.scss";

const SignUp = () => {
  let [displayName, setDisplayName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password2, setPassword2] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(displayName, email, password);
    if (password !== password2) {
      alert("passwords don't match")
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log(displayName)
      await createUserProfileDocument(user, { displayName });
      setDisplayName("");
      setEmail("");
      setPassword("");
      setPassword2("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up With your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          label="Display Name"
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          label = "Email"
          onChange={(e) => setEmail(e.target.value)}
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={password2}
          label="Confirm Password"
          onChange={(e) => setPassword2(e.target.value)}
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
