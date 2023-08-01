// import FaceRecApp from '../assets/Proj1/Proj1_07face1.png'
import FaceRecApp from '../assets/Proj1/Proj1_faceApp.gif'
import ShoppingApp from '../assets/Proj2/store4.gif'
import ShowApp from '../assets/Proj3/tablet.gif'
import PortfolioSite from '../assets/Proj4/portfolioSite.jpg'
import "../styles/Projects.css";


export const ProjectList = [
  {
    id: 1,
    name: 'Face Recognition App',
    image: FaceRecApp,
    githublink: "https://github.com/abdilmajid/faceRecognitionAppReact",
    demolink: "http://192.168.50.118:3000"
  },
  {
    id: 2,
    name: 'Online Store',
    image: ShoppingApp,
    githublink: "https://github.com/abdilmajid/react-OnlineStore",
    demolink: "http://192.168.50.118:4000"
  },
  {
    id: 3,
    name: 'Show Tracker Site',
    image: ShowApp,
    githublink: "https://github.com/abdilmajid/ShowTrackerSite",
    demolink: "https://abdilmajid.github.io/ShowTrackerSite/"
  },
  {
    id: 4,
    name: 'Portfolio Site',
    image: PortfolioSite,
    githublink: "https://github.com/abdilmajid/personalwebsite",
    demolink: "http://192.168.50.118:3002"
  }
]