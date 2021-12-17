import React from "react";

export default function Footer() {
  return (
    <footer id="contact-me" class="footer">
      <div class="content has-text-centered">
        <p>
          Portfolio by
          <strong>
            <a href="https://github.com/D-Y-A-G">&#9812; Denis Arce &emsp;</a>
          </strong>
          LinkedIn
          <a
            href="https://www.linkedin.com/in/denis-arce-81163a6b"
            class="col-12 color"
          >
            <i
              class="fa fa-linkedin-square color"
              style={{ fontSize: "24px", color: "royalblue" }}
            ></i>
          </a>
          &emsp; e-mail:{" "}
          <a href="mailto:dnsare21@gmail.com" id="contactMe">
            dnsarce21 &emsp;
          </a>
          phone: <span style={{ color: "royalblue" }}>425-409-9122</span>
        </p>
        <br></br>
        <a href="#top" style={{ fontWeight: "bold" }}>
          Back to Top
        </a>
      </div>
    </footer>
  );
}
