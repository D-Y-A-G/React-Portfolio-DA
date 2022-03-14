import React from "react";
import denisImage from "./images/DA-lowres.jpg";

export default function AboutMe() {
  return (
    <div>
      <section className="hero is-info is-halfheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            Hello! I am
            <h1 class="title is-1">Denis Arce</h1>
            <h2 class="subtitle is-3">Full Stack Web Developer</h2>
          </div>
        </div>
      </section>

      <section
        className="section"
        id="about"
        // id="about-me"
        // className="columns is-mobile"
        // style={{ fontSize: "1vw", paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-heading">
          <figure className="image is 128x128" id="portrait">
            <img className="is-rounded" src={denisImage} alt="Denis Portrait" />
          </figure>
        </div>
        <h3 class="title is-2">About Me...</h3>
        <h4 class="subtitle is-5">A little bit of my background</h4>
        <div class="container">
          <p>
            Full stack web developer with Business Management and Finance
            experience educated at University of Texas at San Antonio. Skills in
            HTML, CSS, and JavaScript and strengths in managing teams, learning
            technology, creativity, and teamwork. Successfully implemented new
            processes which increased organizational and efficiency in work
            processes. With each project, I aim to best engage my team and
            audience for an impactful user experience. I’m excited to develop
            responsive websites, and provide unique perspectives on how users
            interact with websites and applications. Passionate about
            approaching programming challenges and leveraging my skills as part
            of a fast-paced, ever-growing and quality driven team to build
            better experiences for users.
          </p>
        </div>
      </section>
    </div>
  );
}
