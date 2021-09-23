import react from 'react';
import Project from '../Project'
import projectData from '../projectdata.json'
import mealPlanImg from '../images/meal-planner.jpg'

function Work() {
    return(
        <>
        <h1 className='m-2'>Portfolio</h1>
        {projectData.map(project => (
            <Project name={project.name} image={project.image} link={project.link} descr={project.descr} />
        ))},
        
        </>
    )
}

export default Work;