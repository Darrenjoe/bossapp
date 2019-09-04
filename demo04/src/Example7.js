import React, { useState, useMemo } from "react";

function Example7() {
  const [pengyuyan, setPengyuyan] = useState("彭于晏在代课");
  const [wuyanzu, setWuyanzu] = useState("吴彦祖在代课");
  return (
    <div>
      <button
        onClick={() => {
          setPengyuyan(new Date().getTime());
        }}
      >
        彭于晏
      </button>
      <button
        onClick={() => {
          setWuyanzu(new Date().getTime() + "吴彦祖来了");
        }}
      >
        吴彦祖
      </button>
      <ChildComponent name={pengyuyan}>{wuyanzu}</ChildComponent>
    </div>
  );
}

function ChildComponent({ name, children }) {
  function changePengyuyan() {
    console.log("执行了");
    return name + "彭于晏来了";
  }

  const actionPengyuyan = useMemo(() => changePengyuyan(name), [name]);

  return (
    <div>
      <div>{actionPengyuyan}</div>
      <div>{children}</div>
    </div>
  );
}

export default Example7;
