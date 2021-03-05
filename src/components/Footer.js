import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div class="social-icons">
        <a
          target="_blank"
          href="https://github.com/jzboyd"
          class="social-icon-link github"
          aria-label="Github"
        >
          <i class="fab fa-github" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/joelzisholtz/"
          class="social-icon-link linkedin"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to="/sign-up">About Me</Link>
            <Link to="/sign-up">Contact Me</Link>
          </div>

          <div class="footer-link-items">
            <h2>Links</h2>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Github</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
