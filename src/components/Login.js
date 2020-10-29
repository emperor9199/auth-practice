import React, { useContext, useRef } from "react";
import app from "../firebase";
import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await app
        .auth()
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        );
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  }

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input type="email" name="email" ref={emailRef} required />
        <label>Password :</label>
        <input type="password" name="password" ref={passwordRef} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
