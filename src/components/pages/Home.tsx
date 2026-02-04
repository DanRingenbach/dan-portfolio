import React, { JSX } from "react";
import styles from "./Home.module.scss";

export default function Home(): JSX.Element {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'JavaScript', 'CSS/SCSS', 'HTML5',
    'Node.js', 'Git', 'Figma', 'Adobe Creative Suite', 'UX/UI Design', 'Responsive Design'
  ];

  return (
    <>
      <div className={styles.container} >
        <div className={styles.content}>
          <p className={styles.bio}>
            Dan Ringenbach is a front end developer as well as a UX/UI designer. He leverages his background in metal working and the fine arts to create web applications that feel sturdy and functional in addition to being light and responsive. He enjoys discussions on new design practices and methodologies with friends and associates and is always ready to play a friendly game of chess.
          </p>
          
          <div className={styles.skillsContainer}>
            <div className={styles.skillsTrack}>
              {[...skills, ...skills].map((skill, index) => (
                <span key={index} className={styles.skill}>{skill}</span>
              ))}
            </div>
          </div>
          
          <ul className={styles.buttonList}>
              <a className="button" href="mailto:danringenbach.art@gmail.com" >
                E-Mail
              </a>
          
              <a className="button" href="https://docs.google.com/document/d/1GmBgI6t6tpi4gME74v2dNUCl5eAihzYYb3wr1xWBgn4/edit?usp=sharing">
                Resume
              </a>
       
              <a className="button" href="https://www.linkedin.com/in/daniel-ringenbach">
                LinkedIn
              </a>
        
              <a className="button" href='https://github.com/DanRingenbach'>
                GitHub
              </a>
          </ul>
        </div>
      </div>
    </>
  );
}