import React from "react";
import Header from "../Header";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <header>
      <div className="block">
        <nav className="navbar">
          <Header />
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="category" to="about" offset={-100}>
                <a href="#about">About me</a>
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="category" to="portfolio" offset={-100}>
                <a href="#portfolio">Portfolio</a>
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="category" to="contact" offset={-100}>
                <a href="#contact">Contact</a>
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="category" to="resume" offset={-100}>
                <a href="#resume">Resume</a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
