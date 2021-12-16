import React from "react";
import concertTrackerImage from "./images/concert-tracker.jpg";

export default function projectCards() {
  //can pass props here if necessary

  return (
    <div className="main-container">
      <div className="column is-7 project-info my-0" id="concert-tracker">
        <div className="card">
          <div className="card-image">
            <figure className="image is-5by10">
              <img src={concertTrackerImage} alt="concert image" />
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
    </div>
  );
}
