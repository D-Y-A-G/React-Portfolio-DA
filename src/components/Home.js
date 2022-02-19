import React from "react";
import denisImage from "./images/DA-lowres.jpg";
import AboutMe from "./AboutMe";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Header() {
  return (
    <div>
      {/* <div>
        <figure class="is-fullwidth" id="portrait">
          <img class="is-rounded" src={denisImage} alt="Denis Portrait" />
        </figure>
        <section class="section " id="hello">
          <div class="container columns is-mobile " id="intro">
            <div class="title" style={{ fontSize: "4vw" }}>
              Hello,
            </div>
            <br />
            <p class="subtitle " style={{ fontSize: "4vw" }}>
              <br></br> I'm&ensp;
              <span id="name" style={{ fontSize: "4vw" }}>
                Denis Arce
              </span>
            </p>
          </div>
        </section>
      </div> */}
      <AboutMe />
      <Footer />
    </div>
  );
}
