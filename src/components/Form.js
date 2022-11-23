import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  let changeFunction = (e) => {
    setText(e.target.value);
  };
  let UppercaseFunction = () => {
    let Upper_Text = text.toUpperCase();
    setText(Upper_Text);
    props.Alert_Function("Text Converted to Uppercase", "Success");
  };
  let LowercaseFunction = () => {
    let Lower_Text = text.toLowerCase();
    setText(Lower_Text);
    props.Alert_Function("Text Converted to Lowercase", "Success");
  };
  let CopyFunction = () => {
    navigator.clipboard.writeText(text);
    props.Alert_Function("Text Copied to ClipBoard", "Success");
  };
  let ClearFunction=()=>{
    setText("")
  }

  return (
    <>
      <div className="mb-3 container">
        <h2
          style={{ color: props.mode === "dark" ? "white" : "black" }}
          className="text-center"
        >
          {props.heading}
        </h2>
        <textarea
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#525252" : "white",
          }}
          onChange={changeFunction}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={UppercaseFunction}>
          To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={LowercaseFunction}>
          To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={CopyFunction}>
          Copy to Clipboard
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={ClearFunction}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h2 style={{color: props.mode === "dark" ? "white" : "black"}}>
          Word And Character Count
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Total word is {text.trim().split(/\s+/).length} and Total character is{" "}
          {text.length}
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your reading time is {text.split(" ").length * 0.008}
        </p>
      </div>
    </>
  );
}
