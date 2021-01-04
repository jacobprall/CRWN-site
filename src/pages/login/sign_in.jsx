import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input";
import { CustomButton } from "../../components/custom-button/custom-button.jsx";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default function SignIn() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") setEmail(value);
    else setPassword(value);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in wth your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
