import React, { useState, useRef, useEffect } from "react";

function Example8() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = "Hello Darren";
    console.log(inputEl);
  };

  const [text, setText] = useState("Darren");
  const textRef = useRef();

  useEffect(() => {
    textRef.current = text;
    console.log("text", textRef.current);
  });

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>show input on text</button>
      <br></br>
      <br></br>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <h2>{text}</h2>
    </div>
  );
}
export default Example8;
