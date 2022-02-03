import { Outlet, Link } from "react-router-dom";
import '../Navbar/navbar.css';


const Layout = () => {
 
  return (
    <>
      <nav className='navbar active'>
        <ul>
          <li>
            <Link className='nav' to="/"> <span className='logo'>LA</span> </Link>
          </li>
          <li>
            <Link className='nav' to="/blogs">Blog</Link>
          </li>
          <li>
            <Link className='nav' to="/contact">Contact</Link>
          </li>
          <li>
            <Link className='nav' to="/about">About Me</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;