import React, { JSX } from 'react';
import Project from '../Project';
import projectData from '../projectdata.json';

function Work(): JSX.Element {
    return(
        <>
        {projectData.map((project, index) => (
            <Project 
                key={index} 
                name={project.name} 
                image={project.image} 
                link={project.link} 
                descr={project.descr} 
                deploy={project.deploy} 
            />
        ))}
        </>
    )
}

export default Work;