import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState(" ");
  //Get Text
  const handleOnChange = (event) => {
    //console.log("Change click");
    setText(event.target.value);
  };
  //Convert to uppercase
  const handleUpClick = () => {
    //console.log("Uppercase button click", text);
    var newText = text.toUpperCase();
    setText(newText);
  };
  //Convert to lower case
  const handleLowClick = () => {
    var newText = text.toLowerCase();
    setText(newText);
  };
  //Convert to Lower Case
  const handleInverse = () => {
    const newText = text;
    const rev = Array.from(newText).reverse().join("");
    setText(rev);
  };
  const handleClear = () => {
    //console.log("Uppercase button click", text);
    var newText = "";
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
        <button className="btn btn-primary mx-2" onClick={handleInverse}>
          Inverse Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Crear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minuts to Read the Paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
