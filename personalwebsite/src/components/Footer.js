import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/abdilmajid-ibrahim"><AiOutlineLinkedin /></a>
        <a href="https://github.com/abdilmajid"><SiGithub /></a>
        <a href="mailto:abdilwebdev@gmail.com"><MdOutlineEmail /></a>
      </div>     
      <p> &copy; 2023 AbdilmajidIbrahim.com </p>
    </div>
  );
}

export default Footer