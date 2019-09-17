import React, { useState } from "react";

function Darren() {
  const [color, setColor] = useState("blue");
  const changeColor = () => {
    setColor(color == "blue" ? "red" : "blue");
  };
  return (
    <>
      <div>styleJSX</div>
      <div className="main">darren</div>
      <div>
        <button onClick={changeColor}>Change Color</button>
      </div>
      <style jsx>
        {`
          div {
            color: ${color};
          }
          .main {
            color: red;
          }
        `}
      </style>
    </>
  );
}
export default Darren;
