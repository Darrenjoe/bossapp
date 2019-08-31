import React, { useState } from "react";
function Example() {
  const [age, setAge] = useState(23);
  const [sex, setSex] = useState("男");
  const [work, setWork] = useState("前端工程师");
  return (
    <div>
      <p>Darren今年：{age}岁</p>
      <p>性别：{sex}</p>
      <p>工作：{work}</p>
    </div>
  );
}

export default Example;
