import "../styles/Certs.css";
import comptia_img from "../assets/comptia-linux-ce-certification.png";
import rhcsa_img from "../assets/rhcsa.png";
import aws_cloud from "../assets/aws_cloudprac.png";

function Certs() {
  return (
    <div>
      <h2> Certifications </h2>
    <div className="certList center">
    <div className="container ">
        <a href='https://www.credly.com/badges/0431fbc9-7a09-44ac-b82d-a6a86163ea6e'>
        <img src={comptia_img} alt="ComTIA_Badge" className="responsive"  />
        </a>
      </div>
      <div className="container ">
        <a href="https://rhtapps.redhat.com/verify?certId=230-110-702">
        <img src={rhcsa_img} alt="RedHat_Badge" className="responsive" />
        </a>
      </div>
      <div className="container ">
        <img src={aws_cloud} alt ="AWS_Badge" className="responsive" />
        <div className='overlay_title coming_soon'>
          COMING SOON
        </div>
      </div>
      </div>
    </div>
  );
}

export default Certs