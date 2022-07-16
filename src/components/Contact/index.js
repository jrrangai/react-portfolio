import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1 className="title is-1" id="contact">
        {" "}
        Contact Me{" "}
      </h1>
      {/*  Form Start: */}
      {/* Name */}
      <div className="box message-form">
        <div className="field">
          <label className="label"> Name </label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Insert Name Here"
            ></input>
          </div>
        </div>
        {/* Email */}
        <div className="field">
          <label className="label"> Email </label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Insert Email Here"
            ></input>
          </div>
        </div>
        {/* Message */}
        <div className="field">
          <label className="label"> Message </label>
          <div className="control">
            <input
              className="textarea"
              type="text"
              placeholder="Insert Name Here"
            ></input>
          </div>
        </div>
        {/* Submit */}
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link"> Submit </button>
          </div>
          <div className="control">
            <button className="button is-link is-light"> Cancel </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
