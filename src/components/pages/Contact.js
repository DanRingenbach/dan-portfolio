import React from "react";
import resume from "../images/Resume.pdf";

export default function Contact() {
  return (
    <div>
      <h1 className="m-2 ">Contact</h1>
      <div className='m-3 contact'>
        <h3>Email</h3>
        <a href="mailto:danringenbach.art@gmail.com">
          danringenbach.art@gmail.com
        </a>
        <p></p>
        <h3>Phone</h3>
        <p>484-944-4068</p>
        <h3>Resume</h3>
        <a href={resume} download="Dan Ringenbach's Resume">
          Click to download
        </a>
      </div>
    </div>
  );
}
