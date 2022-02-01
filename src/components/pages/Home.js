import React from "react";
import propic from "../images/propic.jpg";
export default function About() {
  return (
    <div className="container mt-4" id="aboutme">
      
        <div className="container-div">
          <img
            src={propic}
            style={{
              height: "350px",
              width: "300px",
              borderRadius: "40px",
            }}
            alt="Profile Picture"
          />
        </div>
        <div id="aboutmedescr">
          <h2>About Me</h2>
          <p className="m-5" style={{textAlign: "left"}}>My name is Dan Ringenbach and I love to make websites that are not only visually striking but are highly functional as well. I went to University for sculpture and in the past few years developed a passion for web development and design.</p>
          
        </div>
      
    </div>
  );
}
