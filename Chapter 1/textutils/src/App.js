import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter The Text to Analyze Below" />
      </div>
    </>
  );
}

export default App;
