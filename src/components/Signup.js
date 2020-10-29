import React, { useRef } from "react";
import app from "../firebase";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        );
      history.push("/login");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input type="email" name="email" ref={emailRef} required />
        <label>Password :</label>
        <input type="password" name="password" ref={passwordRef} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
