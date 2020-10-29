import React from "react";
import app from "../firebase";

export default function Dashboard() {
  return (
    <>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </>
  );
}
