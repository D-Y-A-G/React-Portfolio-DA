import React from "react";

export default function Nav() {
  return (
    <div className="navbar-end">
      <div className="navbar-brand ">
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
          onClick={["toggleBurger()"]} //need to fix this onclick and add source code for burger icon
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
            href="https://www.linkedin.com/in/denis-arce-81163a6b/"
          >
            {" "}
            Home{" "}
          </a>

          <a className="navbar-item" href="#recentWork">
            {" "}
            Portfolio{" "}
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> More </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="#about-me">
                {" "}
                About me{" "}
              </a>
              <a className="navbar-item" href="https://github.com/D-Y-A-G">
                GitHub
              </a>
              <a className="navbar-item" href="mailto:dnsare21@gmail.com">
                {" "}
                Contact{" "}
              </a>
              <hr className="navbar-divider" />
              <a
                className="navbar-item"
                href={"https://www.linkedin.com/in/denis-arce-81163a6b/"}
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
            <a
              className="button is-danger"
              href={"/assets/images/Resume-Denis-Arce.pdf"}
            >
              Resume
            </a>
            {/*  <a class="button is-danger"> Login </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
