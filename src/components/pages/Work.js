
import Project from '../Project'
import projectData from '../projectdata.json'


function Work() {
    return(
        <>
        
        {projectData.map(project => (
            <Project name={project.name} image={project.image} link={project.link} descr={project.descr} deploy={project.deploy} />
        ))},
        
        </>
    )
}

export default Work;