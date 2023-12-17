import React,{useState} from "react";
import PropTypes from "prop-types";


export default function TextForm(props) {
    /*Points:
        1.State variables cant be modified like any other normal variables Eg., text="something" this is wrong
        2.The method named setText is used to update the text Eg.,setText("something")
        3.The value inside useState is the default value for variable text
    */
    const [text, setText]=useState('');


    const handleUpperCaseClick=()=>{
        // console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    };

    const handleOnChange=(event)=>{
        // console.log("Handle on change");
        setText(event.target.value);
    };

    return (
    <div>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        {/* //In react class -> className and for->htmlFor */}
        <label htmlFor="myTextArea" className="form-label my-3 fs-3">
          {props.label}
        </label>
        <textarea className="form-control" id="myTextArea" rows="10" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  label: "Start typing below",
};
