import React from "react";
import Nav from "./Nav";
import About from "./AboutMe";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar has-background-light"
        role="navigation"
        aria-label="main navigation"
      >
        <Nav />
      </nav>
    </div>
  );
}
