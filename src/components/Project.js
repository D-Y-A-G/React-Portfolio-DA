import React from "react";
import concertTrackerImage from "./images/concert-tracker.jpg";
import denisPortrait from "./images/denis2.jpg";
import k9cupid from "./images/k9cupid.jpg";
import ecommerce from "./images/e-commerce.png";

export default function projectCards() {
  //can pass props here if necessary

  return (
    <div className="main-container project-cards columns is-12" id="project-cards">
      <div className="card " id="recentWork">
        <div className="card-image">
          <figure className="image is-5by10">
            <img src={concertTrackerImage} alt="concert image" />
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
              <p className="title is-4">Concert Tracker</p>
              <p className="subtitle is-6">
                Find your favorite band's music and concert info!
              </p>
            </div>
          </div>

          <div class="content">
            Front-end application that allows users to search a band/artist for
            the most upcoming event, provide them with ticket information as
            well as music video resources.
            <a href="https://github.com/D-Y-A-G/pj1-sam-dav-den">
              #Github-repo
            </a>{" "}
            <a href="https://d-y-a-g.github.io/pj1-sam-dav-den/">& Demo App!</a>
            <br />
            {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
          </div>
        </div>
      </div>

      {/* project 2 */}

      <div className="" style={{ marginLeft: "10px" }}>
        <div className="card" id="project-card">
          <div className="card-image">
            <figure className="image is-5by10">
              <img src={k9cupid} alt="dog app image" />
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
                <p className="title is-4">K9Cupid</p>
                <p className="subtitle is-6">
                  A social app for human's best friends!
                </p>
              </div>
            </div>

            <div class="content">
              A built from scratch application for doggies to be able to
              socialize and find other dogs with similar attributes to make fun
              and lasting friendships.
              <a href="https://github.com/D-Y-A-G/K9Cupid">#Github-repo</a>{" "}
              <a href="https://k9-cupid-final.herokuapp.com/">& Demo App!</a>
              <br />
              {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
            </div>
          </div>
        </div>
      </div>

      {/* project 3 */}

      <div className="" style={{ marginLeft: "10px" }}>
        <div className="card" id="project-card">
          <div className="card-image">
            <figure className="image is-5by10">
              <img src={ecommerce} alt="dog app img" />
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
                <p className="title is-4">E-Commerce Store</p>
                <p className="subtitle is-6">A back-end e-commerce website</p>
              </div>
            </div>

            <div class="content">
              A back end application for an e-commerce website that uses latest
              technologies to compete with other e-commerce companies.
              <a href="https://github.com/D-Y-A-G/Tech-Blog-DA">
                #Github-repo
              </a>{" "}
              <a href="https://watch.screencastify.com/v/iI7bmrt6TfZticK6IEAG">
                & Demo App!
              </a>
              <br />
              {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="main-container">
      <div className="column is-3 project-info my-0" id="concert-tracker">
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
    </div> */
}
