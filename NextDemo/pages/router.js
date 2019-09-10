import React from "react";
import Link from "next/link";
import Router from "next/router";

const Home = () => {
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
    </div>
  );
};

export default Home;
