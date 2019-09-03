import React from "react";
import Buttons from "./Buttons";
import ShowArea from "./ShowArea";
import { Color } from "./Colors";

function Example6() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}

export default Example6;
