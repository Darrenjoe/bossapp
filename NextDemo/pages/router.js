import React from "react";
import Link from "next/link";
import Router from "next/router";

const Home = () => (
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
      <button
        onClick={() => {
          Router.push("/DarrenA");
        }}
      >
        goto A
      </button>
    </div>
  </div>
);

export default Home;
