import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import "../styles/Projects.css";

function Projects() {
  return (
    <div className='projects'>
      <h1> My Project</h1> 
      <div className='projectList'>
        {ProjectList.map((project) => {
          return <ProjectItem key={project.id} name={project.name} image={project.image} githublink={project.githublink} demolink={project.demolink}/>
        })}
      </div>
    </div>
    );
  }
  
  export default Projects;