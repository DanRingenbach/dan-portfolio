import React, { JSX } from 'react';
import styles from './Project.module.scss';

interface ProjectProps {
  name: string;
  link: string;
  descr: string;
  deploy?: string;
}

function Project(props: ProjectProps): JSX.Element {
  let deployedBtn: JSX.Element | null;

  if (props.deploy) {
    deployedBtn = (
      <a
        className='button'
        href={props.deploy}
        role="button"
      >
        Deployed Application
      </a>
    );
  } else {
    deployedBtn = null;
  }

  return (
    <>
      <div className={styles.projectCard}>
        <h3 className={styles.title}>
          {props.name}
        </h3>
        <p className={styles.description}>
          {props.descr}
        </p>
        <div className={styles.buttonContainer}>

            {deployedBtn}
          
          <a
            className='button'
            href={props.link}
            role="button"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;