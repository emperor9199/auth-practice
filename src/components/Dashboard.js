import React from "react";
import app from "../firebase";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </>
  );
}
