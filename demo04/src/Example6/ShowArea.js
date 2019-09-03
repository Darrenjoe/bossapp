import React, { useContext } from "react";
import { ColorContext } from "./Colors";

function ShowArea() {
  const { color } = useContext(ColorContext);
  return <div style={{ color: color }}>字体颜色{color}</div>;
}

export default ShowArea;
