import React, { useState } from "react";
import FormInput from '../../components/form-input/form-input'
import { CustomButton } from '../../components/custom-button/custom-button.jsx'

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
    <div class="sign-in">
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
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}
