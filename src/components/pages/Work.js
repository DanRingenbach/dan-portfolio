
import Project from '../Project'
import projectData from '../projectdata.json'


function Work() {
    return(
        <>
        <h1 className='m-2'>Portfolio</h1>
        {projectData.map(project => (
            <Project name={project.name} image={project.image} link={project.link} descr={project.descr} deploy={project.deploy} />
        ))},
        
        </>
    )
}

export default Work;