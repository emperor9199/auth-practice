import React from "react";
import { Link } from "react-router-dom";
import app from "../firebase";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </>
  );
}
