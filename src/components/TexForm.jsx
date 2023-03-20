import { useState } from "react";
import React from "react";

function TexForm(props) {
  const handleUP = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const handleChange = (e) => {
    console.log("chan");
    setText(e.target.value);
  };

  const handlower = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handlecolor = () => {};
  const [text, setText] = useState("Enter Somthing");
  const [color, setColor] = useState();
  return (
    <>
      <div>
        <div className="container">
          <div class="form-group">
            <h3>{props.name}</h3>
            <label htmlFor="exampleFormControlTextarea1"></label>
            <textarea
              class="form-control"
              value={text}
              color={color}
              onChange={handleChange}
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
          </div>
          <button onClick={handleUP} className="btn btn-primary my-3 mx-2 ">
            convert To UperCase
          </button>
          <button onClick={handlower} className="btn btn-primary my-3 mx-2 ">
            convert To LowerCase
          </button>
        </div>
      </div>
      <div className="container my-3 ">
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} Words And {text.length} Charactors
        </p>
        <p>{0.008 * text.split(" ").length} Time to Read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
      <div className="col-12 d-flex">
        <div className="col-6"></div>
        <div className="col-4">
          <p>Made bY shibu❤️</p>
        </div>
      </div>
    </>
  );
}
export default TexForm;
