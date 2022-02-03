import {  Link } from "react-router-dom";
import '../Home/home.css';
import '/Users/yaroslavlasiiychuk/Desktop/react_project/my-app/src/style/module.css';
import '/Users/yaroslavlasiiychuk/Desktop/react_project/my-app/src/index.css';
import Video from '/Users/yaroslavlasiiychuk/Desktop/react_project/my-app/src/img/Intro - 98191.mp4'

 


const Home = () => {
   

    return ( 
      <div className='home' >  
          <video  autoPlay loop muted src={Video} type="img/Intro - 98191.mp4" />

          <header className='main-page'> 
               <h1 className='primary-text'>Hi! My Name Is Iaroslav Lasiichuk!</h1>
               <Link className='title-link' to="/about">Learn More</Link>
          </header>
            
          <footer className='footer-home'>
            <a href="http://www.instagram.com/slavalasiychuk/?igshid=rvivm09cjvhg&hl=en" target="_blank"><i className="fab fa-instagram-square "></i></a>
            <a href="http://www.linkedin.com/in/iaroslav-lasiichuk-2974571a5/" target="_blank"> <i className="fab fa-linkedin"></i></a>
            <a href="http://github.com/IaroslavLasiichuk" target="_blank"><i className=" fab fa-github-square"></i></a> 
         </footer>
        
      </div>
    )};
  
  export default Home;