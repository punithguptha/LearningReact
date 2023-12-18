import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  /*Points:
        1.State variables cant be modified like any other normal variables Eg., text="something" this is wrong
        2.The method named setText is used to update the text Eg.,setText("something")
        3.The value inside useState is the default value for variable text
    */
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCaseClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Handle on change");
    setText(event.target.value);
  };

  const findWordCount = (sentence) => {
    let aow = sentence.split(" ");
    let count = 0;
    aow.forEach((element) => {
      if (element !== " " && element !== "") {
        count++;
      }
    });
    return count;
  };

  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          {/* //In react class -> className and for->htmlFor */}
          <label htmlFor="myTextArea" className="form-label my-3 fs-3">
            {props.label}
          </label>
          <textarea className="form-control" id="myTextArea" rows="10" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "#c2c2c2" }}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowerCaseClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="container my-5">
        <h2>Your Text Analysis</h2>
        <p>
          {" "}
          Your text has {findWordCount(text)} words and {text.length} characters
        </p>
        <p>It takes {0.008 * findWordCount(text)} minutes on average to read what you just typed</p>
        <h2 className="mt-4">Preview</h2>
        <p>{text.length === 0 ? "Enter text inside text box to analyze" : text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

TextForm.defaultProps = {
  label: "Start typing below",
  mode: "light",
};
