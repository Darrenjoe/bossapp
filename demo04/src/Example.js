import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  useEffect(() => {
    console.log(`useEffect=>come to Index`);
    return () => {
      console.log("go out Index");
    };
  }, []);
  return <h2>Darren</h2>;
}
function List() {
  return <h2>List</h2>;
}

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`useEffect=>You Click ${count} times`);
    return () => {
      console.log("========================");
    };
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" exact component={List} />
      </Router>
    </div>
  );
}

export default Example;
