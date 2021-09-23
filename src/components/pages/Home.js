import React from "react";
import propic from "../images/propic.jpg";
export default function About() {
  return (
    <div className="container mt-4" id="aboutme">
      <div className="row">
        <div className="container-div">
          <img
            src={propic}
            style={{
              height: "350px",
              width: "300px",
              borderRadius: "40px",
              alignText: "center",
            }}
            alt="Profile Picture"
          />
        </div>
        <div id="aboutmedescr">
          <h1>About Me</h1>
          <p className="mb-5">
            Front End Developer with experience in the arts and manufacturing.
            Recently earned a Coding certificate from the University of
            Pennsylvania and is striving to make websites that are not only
            visually striking but highly functional. Skilled in HTML, CSS,
            JavaScript and NoSQL. Known by former coworkers and teammates to be
            a hard worker, a quick learner, and exceptionally cool under
            pressure. Most recently worked with a team of three to complete a
            full MERN stack application for the final project in the Penn LPS
            Full Stack Bootcamp. Created the backend for said application then
            continued to assist teammates to connect the front end. Excited to
            leverage skills as an artist and a front end developer at a company
            that is fast-paced, creative, and innovative.
          </p>
        </div>
      </div>
    </div>
  );
}
