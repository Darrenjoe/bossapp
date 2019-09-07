import React from "react";
import Link from "next/link";
import Router from "next/router";

const Home = () => {
  function gotoA() {
    Router.push("/DarrenA");
  }
  return (
    <div>
      <h2>Router</h2>
      <div>
        <Link href="/DarrenA">
          <a>goto DarrenA</a>
        </Link>
      </div>
      <div>
        <Link href="/DarrenB">
          <a>goto DarrenB</a>
        </Link>
      </div>
      <div>
        <button onClick={gotoA}>goto A</button>
      </div>
    </div>
  );
};

export default Home;
