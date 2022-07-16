import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="block" id="contactFooter">
      <footer className="footer">
        <ul className="flex-across">
          <li>
            <a target="_blank" rel="noreferrer" href="tel:847-555-5555">
              <i className="fa fa-phone"></i> Call/ Text
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jrrangai"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/joshua-rangai-ba3141163/"
            >
              <i className="fab fa-linkedin"></i> Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:joshrangai@gmail.com">
              <i className="fa fa-envelope"></i> Email
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
