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
    props.showAlert("Converted to Upper Case", "success");
  };
  //Convert to lower case
  const handleLowClick = () => {
    var newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  //Inverse Text
  const handleInverse = () => {
    const newText = text;
    const rev = Array.from(newText).reverse().join("");
    setText(rev);
    props.showAlert("Converted to Inverse", "success");
  };
  //Handle Space
  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space Handled", "success");
  };

  //Clear Text field
  const handleClear = () => {
    //console.log("Uppercase button click", text);
    var newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div>
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            // @ts-ignore
            rows="5"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleInverse}
        >
          Inverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
        >
          Handle Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Crear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minuts to Read the Paragraph
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
