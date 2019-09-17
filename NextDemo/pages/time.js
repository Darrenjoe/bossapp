import React, { useState } from "react";

function Time() {
  const [nowTime, setNowTime] = useState(Date.now());
  const changeTime = async () => {
    const moment = await import("moment");
    setNowTime(moment(Date.now()).format());
  };
  return (
    <>
      <div>显示时间为：{nowTime}</div>
      <div>
        <button onClick={changeTime}>改变时间</button>
      </div>
    </>
  );
}

export default Time;
