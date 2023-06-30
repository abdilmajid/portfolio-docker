import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import Profile from "../assets/ProfilePic.png";
import "../styles/Home.css";



function Home() {
  return (
    <div className="home">
      <div className="about">
      <img  src={Profile} alt="abdil" className="profile"/>
        <h2> Hi, My Name is Abdil</h2>
        <div className="prompt">
          <p>I am a fullstack developer, I currently work with React/Redux applications with Node-Express on the server side, and Postgresql as a database. My Github page lists many of the other technologies I have used.</p>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/abdilmajid-ibrahim"><AiOutlineLinkedin /></a>
            <a href="https://github.com/abdilmajid"><SiGithub /></a>
            <a href="mailto:abdilwebdev@gmail.com"><MdOutlineEmail /></a>
          </div>   
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>HTML, CSS, JavaScript, SQL, BASH</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home