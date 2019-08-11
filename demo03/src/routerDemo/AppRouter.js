import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import List from "./pages/List";
import Home from "./pages/Home";

// 设置规则  传递至 接收值 显示内容

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/list">list</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/home/" component={Home} />
    </Router>
  );
}

export default AppRouter;
