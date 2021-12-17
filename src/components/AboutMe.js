import React from "react";
import denisImage from "./images/DA-lowres.jpg";

export default function AboutMe() {
  return (
    <div>
      <figure class="is-fullwidth" id="portrait">
        <img class="is-rounded" src={denisImage} alt="Denis Portrait" />
      </figure>
      <section class="section" id="hello">
        <div class="container columns is-mobile " id="intro">
          <p class="title" style={{ fontSize: "4vw" }}>
            Hello,
          </p>
          <br />
          <p class="subtitle " style={{ fontSize: "4vw" }}>
            <br></br> I'm&ensp;
            <span id="name" style={{ fontSize: "4vw" }}>
              Denis Arce
            </span>
          </p>
        </div>
      </section>

      <section
        id="about-me"
        className="columns is-mobile"
        style={{ fontSize: "1vw" }}
      >
        <div class="card description my-0">
          <div class="card-content about-me" style={{ fontWeight: "650" }}>
            ABOUT ME . . .
            <div class="content" style={{ color: "gray" }}>
              Jr. Full Stack Web Developer with Business Management and Finance
              experience. Educated at University of Texas at San Antonio.
              <br />
              Skills in HTML, CSS, and JavaScript and strengths in managing
              teams, learning technology, creativity, and teamwork.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
