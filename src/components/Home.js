import React from "react";
import denisImage from "./images/DA-lowres.jpg";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

export default function Header() {
  return (
    <div>
      <AboutMe />
      <div class="columns has-same-height is-gapless">
        <div class="column">
          {/* <!-- Profile --> */}
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">Profile</h3>

              <div class="content">
                <table class="table-profile">
                  <tr>
                    <th colspan="1"></th>
                    <th colspan="2"></th>
                  </tr>
                  <tr>
                    <td>Location:</td>
                    <td>San Antonio, TX</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>425-409-9122</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>dnsarce21@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Job:</td>
                    <td>Freelance/Open</td>
                  </tr>
                  <tr>
                    <td>Interests:</td>
                    <td> Technology, Gaming, Software</td>
                  </tr>
                </table>
              </div>
              <br />
              <div class="buttons has-addons is-centered">
                <a href="#" class="button is-link">
                  Github
                </a>
                <a href="#" class="button is-link">
                  LinkedIn
                </a>
                <a href="#" class="button is-link">
                  Twitter
                </a>
                <a href="#" class="button is-link">
                  CodeTrace
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          {/* <!-- Skills --> */}
          <div class="card">
            <div class="card-content skills-content">
              <h3 class="title is-4">Skills</h3>
              <div class="content">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>JavaScript:</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="85"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>React:</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="90"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Node.js:</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="75"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>HTML5/CSS3</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="95"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Databases</strong>
                        <br />
                        <progress
                          class="progress is-primary"
                          value="66"
                          max="100"
                        ></progress>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section " id="services">
        <div class="section-heading">
          <h3 class="title is-2 has-text-centered mb-5">Services</h3>
        </div>
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="box">
                <div class="content">
                  <h4 class="title is-5">Front End Web Development</h4>
                  Develop Front-End using latest standards with HTML5/CSS3 with
                  added functionality using JavaScript and React.
                </div>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <div class="content">
                  <h4 class="title is-5">Back End Web Development</h4>
                  Develop Back End application/service using Node.js or and SQL
                  server or Mongo DB databases.
                </div>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <div class="content">
                  <h4 class="title is-5">Responsive Web Design</h4>
                  Develop application/service using modern technology to make it
                  accessible on all devices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
