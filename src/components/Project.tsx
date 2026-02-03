import React, { JSX } from 'react';

interface ProjectProps {
  name: string;
  image: string;
  link: string;
  descr: string;
  deploy?: string;
}

function Project(props: ProjectProps): JSX.Element {
  let deployedBtn: JSX.Element | null;

  if (props.deploy) {
    deployedBtn = (
      <a
        className="btn btn-primary m-2"
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
      <div className="container mt-3">
        <div className="">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">
                {props.name}
              </h3>
              <p className="card-text" style={{ display:'flex', alignItems: 'flex-start'}}>
                {props.descr}
              </p>
              {deployedBtn}
              <a
                className="btn btn-primary m-2"
                href={props.link}
                role="button"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;