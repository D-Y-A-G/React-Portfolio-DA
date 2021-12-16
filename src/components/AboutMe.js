import React from "react";
import denisImage from "./images/denis2.jpg"

export default function AboutMe() {
  return (
    <div>
      <figure class="image is-128x128" id="portrait">
        <img class="is-rounded" src={denisImage} alt="Denis Portrait" />
      </figure>
      <section class="section">
        <div class="container" id="intro">
          <h1 class="title" style={{fontSize:"4vw"}}>
            Hello,
          </h1>
          <p class="subtitle" style={{fontSize:"4vw"}}>
            I'm{" "}
            <span id="name" style={{fontSize:"4vw"}}>
              Denis Arce
            </span>
          </p>
        </div>

        <h1 class="nickname"></h1>
      </section>

      <section>
        <div class="card description my-0" id="about-me">
          <div class="card-content about-me" style={{fontWeight: "650"}}>
            ABOUT ME . . .
            <div class="content" style={{color: "gray"}}>
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
