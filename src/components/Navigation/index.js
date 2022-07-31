import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <div className="block">
        <nav className="navbar">
          <Header />
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="category" to="about" offset={-100}>
                About me
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="category" to="/portfolio" offset={-100}>
                Portfolio
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="category" to="contact" offset={-100}>
                Contact
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="category" to="resume" offset={-100}>
                Resume
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
