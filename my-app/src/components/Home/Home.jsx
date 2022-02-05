import {Link} from 'react-router-dom';
import '../Home/home.css';
import {Footer} from '../Footer/Footer';
import video from '../../img/98191.mp4'

export const Home = () => (
    <div className='home'>
      <video
          autoPlay
          loop
          muted
          src={video}
          type="img/Intro - 98191.mp4"/>
      
      <header className='main-page'>
        <h1 className='primary-text'>Hi! My Name Is Iaroslav Lasiichuk!</h1>
        <Link className='title-link' to="/about">Learn More</Link>
      </header>
      <Footer/>
    
    </div>
);

