import React from "react";
import Link from "next/link";
import Router from "next/router";

const Home = () => {
  //routeChangeStart
  //routeChangeComplete
  //beforeHistoryChange
  //routeCHangeError
  //hashChangeStart
  //hashChangeComplete

  Router.events.on("routeChange Start", (...args) => {
    console.log("routeChangeStart->路由开始变化", ...args);
  });
  Router.events.on("routeChangeComplete", (...args) => {
    console.log("routeChangeComplete->路由变化结束", ...args);
  });
  return (
    <div>
      <h2>Router</h2>
      <div>
        <Link href="/jiewu?name=breaking">
          <a>选择Breaaking</a>
        </Link>
        <br />
        <Link href="/jiewu?name=locking">
          <a>选择Locking</a>
        </Link>
      </div>
      <div>
        <Link href="#Darren">
          <a>Darren</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
