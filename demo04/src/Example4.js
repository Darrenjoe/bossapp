import React, { useReducer } from "react";

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      <p>分数：{count}</p>
      <button
        onClick={() => {
          dispatch("add");
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch("sub");
        }}
      >
        Sub
      </button>
    </div>
  );
}

export default ReducerDemo;
