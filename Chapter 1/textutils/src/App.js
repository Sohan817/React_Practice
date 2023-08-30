import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter The Text to Analyze Below" />
      </div>
      <div className="container my-3">
        <About />
      </div>
    </>
  );
}

export default App;
