import { SiGithub } from "react-icons/si";
// import { IoIosEye } from "react-icons/io";
import Live from "../assets/Live1.svg"

function ProjectItem({image,name,githublink,demolink}) {
  return (
    <div className='projectItem '>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>

        <a href={githublink} className="social">
          <SiGithub/>
        </a>
        <a href={demolink} className="live">
          <img height="26" src={Live} alt="Demo Icon" className="social"/>
        </a>
    </div>
  );
}

export default ProjectItem