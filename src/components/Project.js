import React from "react";
import { projectData } from "../projectsSeed";

export default function projectCards() {
  //can pass props here if necessary

  return (
    <div
      className="main-container  project-cards columns is-multiline" // {projectData.map(projectData) => ("write code here for html and using seed file")}
      id="project-cards"
    >
      {projectData.map((project) => (
        <div className="card column is-4" id="recentWork">
          <div className="card-image">
            <figure className="image is-5by10">
              <img src={project.image} alt="application preview" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left is-rounded">
                {/* <figure className="image is-48x48 ">
                <img
                  className="is-rounded"
                  src={denisPortrait}
                  alt="Denis Portrait"
                />
              </figure> */}
              </div>
              <div className="media-content">
                <p className="title is-4">{project.title}</p>
                <p className="subtitle is-6">{project.subtitle}</p>
              </div>
            </div>

            {/* <div className="content">{project.description}</div> */}
            <div>
              <strong>Technology:</strong>
              {project.technology}
            </div>
          </div>
          <footer className="card-footer">
            <a href={project.demo} className="card-footer-item">
              Preview
            </a>
            <a href={project.repo} className="card-footer-item">
              Source Code
            </a>
          </footer>
        </div>
      ))}
    </div>
  );
}

/* <div className="main-container">
      <div className="column is-3 project-info my-0" id="concert-tracker">
        <div className="card">
          <div className="card-image">
            <figure className="image is-5by10">
              <img src={concertTrackerImage} alt="concert picture" />
            </figure>
          </div>
          <div className="card-content" id="app-details">
            <div className="media">
              <div className="media-content">
                <p
                  className="title"
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    color: "rgb(194, 2, 2)",
                    fontWeight: "bold",
                    fontSize: "3vw",
                  }}
                >
                  Concert Tracker
                </p>
                <p
                  className="subtitle"
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: "0.75rem",
                    padding: "none",
                    margin: "none",
                    fontWeight: "bold",
                  }}
                >
                  Find your favorite band's music and concert info!
                </p>
              </div>
            </div>
            <div className="card-content">
              Front-end application that allows users to search a band/artist
              for the most upcoming event, provide them with ticket information
              as well as music video resources.
              <a href="https://github.com/D-Y-A-G/pj1-sam-dav-den">#repo</a>
              <br />
              <a
                className="is-info"
                href={"https://d-y-a-g.github.io/pj1-sam-dav-den/"}
                style={{ fontWeight: "bolder" }}
              >
                Test App!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */
