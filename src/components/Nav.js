import React from "react";
import burgerNav from "./js/script";
import resume from "./images/DenisArceResumeWebDev2022.pdf";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="navbar-end">
      <div className="navbar-brand navbar-end ">
        <a className="navbar-item " href="https://github.com/dnsarce21">
          {/* <img src="./assets/img/name.jpg" /> */}
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          id="burger"
          onClick={() => burgerNav}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className="navbar-menu has-text-white">
        <div className="navbar-start">
          <a
            className="navbar-item"
            {...(currentPage === "Home" ? "nav-link active" : "nav-link")}
            href="#home"
            onClick={() => handlePageChange("Home")}
          >
            Home
          </a>

          <a
            className="navbar-item"
            {...(currentPage === "Home" ? "nav-link active" : "nav-link")}
            href="#Portfolio"
            onClick={() => handlePageChange("Projects")}
          >
            Portfolio
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> More </a>

            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                {...(currentPage === "Home" ? "nav-link active" : "nav-link")}
                href="#about"
              >
                About me
              </a>
              <a className="navbar-item" href="https://github.com/D-Y-A-G">
                GitHub
              </a>
              <a
                className="navbar-item"
                {...(currentPage === "Home" ? "nav-link active" : "nav-link")}
                href="#contact"
                onClick={() => handlePageChange("Contact")}
              >
                Message Me!
              </a>
              <hr className="navbar-divider" />
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/denis-arce-81163a6b/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-danger" href={resume}>
              Resume
            </a>
            {/*  <a class="button is-danger"> Login </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
