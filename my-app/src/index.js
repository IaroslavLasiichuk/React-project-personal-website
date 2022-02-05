import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar';
import {Home} from './components/Home/Home';
import Blog from './components/Blog/Blog';
import {Contact} from './components/Contact/Contact';
import {About} from './components/About/About';
import './index.css';
import './style/module.css';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="blogs" element={<Blog/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));