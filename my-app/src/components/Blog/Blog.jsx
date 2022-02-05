import './blog.css';
import {data} from './blogItems.js';
import {Footer} from '../Footer/Footer';


const Blog = () => {
  return (
      <div className='blog-main'>
        <header className='blog-header'>
          <h1>Blog Articles</h1>
        </header>
        {
          data.map((item, i) => (
              <section key={i} className={'blog sec'+i}>
                <p>{item.text}</p>
              </section>
          ))
        }
        <Footer/>
      </div>
  );
};

export default Blog;