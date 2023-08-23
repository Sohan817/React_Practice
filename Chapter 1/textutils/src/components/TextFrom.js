import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState(" ");
  const handleOnChange = (event) => {
    //console.log("Change click");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    //console.log("Uppercase button click", text);
    var newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    //console.log("Uppercase button click", text);
    var newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <>
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
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minuts to read the Paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
