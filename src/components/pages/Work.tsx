import React, { JSX } from 'react';
import Project from '../Project';
import projectData from '../projectdata.json';
import styles from './Work.module.scss';

function Work(): JSX.Element {
    return (
        <div className={styles.workContainer}>
            {projectData.map((project, index) => (
                <Project
                    key={index}
                    name={project.name}
                    link={project.link}
                    descr={project.descr}
                    deploy={project.deploy}
                />
            ))}
        </div>
    )
}

export default Work;