import React, { useRef } from "react";

function Example8() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = "Hello Darren";
    console.log(inputEl);
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>show input on text</button>
    </div>
  );
}
export default Example8;
