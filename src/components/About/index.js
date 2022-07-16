import React from "react";
import "./about.css";

function About() {
  return (
    <div className="block">
      <div className="about">
        {/* photo */}
        <div>
          <h1> Insert Photo here!</h1>
        </div>

        {/* Bio */}
        <div className="content-right wrap-content">
          <h1 className="title is-1" id="about">
            {" "}
            About Me{" "}
          </h1>
          <h1 className="title is-2 is-spaced" id="intro">
            {" "}
            Hello, my name is Josh!{" "}
          </h1>
          <h2 className="subtitle is-4" id="bio">
            I'm an entry level full-stack developer who loves to spend thier
            free time skateboard and learn new things.I'm ready to become an
            asset to your company and learn things along the way.{" "}
          </h2>
          <div className="list-framework">
            <h3>
              <strong>
                Here is a list of the languages, frameworks and libraries I'm
                familar with:
              </strong>
            </h3>
            <ul>
              <li>HTML, CSS, and Javascript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL</li>
              <li>Mongo DB</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
