import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar has-background-light"
        role="navigation"
        aria-label="main navigation"
      >
        {/* <h1 className="has-text-weight-bold">Denis Arce</h1> */}
        <Nav />
      </nav>
    </div>
  );
}
