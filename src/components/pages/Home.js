import React from "react";
import propic from "../images/propic.jpg";
export default function About() {
  return (
    <>
      <div className="container mt-5" id="aboutme">

        <div className="container-div">
          <img
            src={propic}
            
            alt="Profile"
          />
        </div>
        <div id="aboutmedescr">
          
          <p className="m-5" style={{ textAlign: "left", fontSize: '25px', fontStyle: 'italic'  }}>Dan Ringenbach is a front end developer as well as a UX/UI designer. He leverages his background in metal working and the fine arts to create web applications that feel sturdy and functional in addition to being light and responsive. He enjoys discussions on new design practices and methodologies with friends and associates and is always ready to play a friendly game of chess.</p>
          <div className='m-3 contact '>
            <a href="mailto:danringenbach.art@gmail.com" >
              <button className="button">
                E-Mail
              </button>
            </a>
            <p></p>
            <a href="https://docs.google.com/document/d/1GmBgI6t6tpi4gME74v2dNUCl5eAihzYYb3wr1xWBgn4/edit?usp=sharing">
              <button className="button">
                Resume
              </button>
            </a>
            <p></p>
            <a href="https://www.linkedin.com/in/daniel-ringenbach-50a8a41bb/">
              <button className="button" >
                LinkedIn
              </button>
            </a>
            <p></p>
            <a href='https://github.com/DanRingenbach'>
              <button className="button" >
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </>

  );
}
