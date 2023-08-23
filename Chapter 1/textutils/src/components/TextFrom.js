import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleOnChange = (event) => {
    //console.log("Change click");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    //console.log("Uppercase button click", text);
    var newText = text.toUpperCase();
    setText(newText);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          onChange={handleOnChange}
          // @ts-ignore
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
