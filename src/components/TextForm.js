import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Textform.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const HandleUpClick = function () {
    //  console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase",'success')
  };

  const HandleLowClick = function () {
    //  console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase",'success')
  };

  const HandleOnChange = function (event) {
    // console.log("Onchange happened");
    setText(event.target.value);
  };

  const HandleCopy = ()=> {
    var text = document.getElementById("my-box")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text coppied",'success')
  };

  const RemoveExtraSpace = ()=> {
    var words = text.split(/[ ] +/);
    setText(words.join(" "))
    props.showAlert("Extra space deleted",'success')
  };

  return (
    <div className="container">
      <div className={`jumbotron text-${props.mode==="dark"?"light":"dark"}`}>
        <h2>{props.header}</h2>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Text</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            value={text}
            onChange={HandleOnChange}
            id="my-box"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={HandleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={HandleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={RemoveExtraSpace}>
         Remove extra space
        </button>
        <button className="btn btn-primary" onClick={HandleCopy}>
         Copy
        </button>

        <h1>Your Text Summary</h1>
        <p>
          Your text has {text.split(" ").length} words and {text.length}{" "}
          character
        </p>
        <h3>It will take {.008 * text.split(" ").length } minute to read.</h3>
      </div>
      <div className="jumbotron my-3">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  header: PropTypes.string,
};

TextForm.defaultProps = {
  header: "Enter the text Here",
};
