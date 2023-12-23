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
    props.showAlert({alertType:"success",alertMessage:"Succesfully converted to uppercase"});
  };

  const handleLowerCaseClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert({alertType:"success",alertMessage:"Succesfully converted to lowercase"});
  };

  const handleOnChange = (event) => {
    // console.log("Handle on change");
    setText(event.target.value);
  };

  const findWordCount = (sentence) => {
    let wordsArray=text.split(" ").filter((element)=>{return element.length!==0});
    return wordsArray.length;
  };

  const findCharacterCount=(sentence)=>{
    let wordsArray=text.split(" ").filter((element)=>{return element.length!==0});
    let characterCount=0;
    wordsArray.forEach((word)=>{
      characterCount+=word.length;
    })
    return characterCount;
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
        <button disabled={findWordCount(text)===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>
          Convert to Uppercase
        </button>
        <button disabled={findWordCount(text)===0}  className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="container my-5">
        <h2>Your Text Analysis</h2>
        <p>
          {" "}
          Your text has {findWordCount(text)} words and {findCharacterCount(text)} characters(excluding spaces)
        </p>
        <p>It takes {0.008 * findWordCount(text)} minutes on average to read what you just typed</p>
        <h2 className="mt-4">Preview</h2>
        <p>{findCharacterCount(text) === 0 ? "Nothing to preview" : text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  showAlert:PropTypes.func.isRequired,
  mode: PropTypes.string,
};

TextForm.defaultProps = {
  label: "Start typing below",
  mode: "light",
};
