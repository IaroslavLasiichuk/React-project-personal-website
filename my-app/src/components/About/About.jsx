import React from 'react';
import '../About/about.css';
import '/Users/yaroslavlasiiychuk/Desktop/react_project/my-app/src/index.css';
import '/Users/yaroslavlasiiychuk/Desktop/react_project/my-app/src/style/module.css';
import Image from '/Users/yaroslavlasiiychuk/Desktop/react_project/my-app/src/img/8L0A0474.jpg'
const About = () => {
    return (
<div>
      <div className='hero'>
        <aside><img className='primary-img' src={Image} alt="img/8L0A0474.png"/></aside>
         
         <main>
           <h2 className='about-text'>Hi there! I'm Front end Developer!!!</h2>
         </main>

         <section>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat molestiae. Dignissimos facilis ipsum modi repudiandae obcaecati. Quaerat esse eaque non perferendis ducimus? Alias, aut et explicabo ducimus praesentium deserunt delectus vitae dignissimos molestiae assumenda sed atque eius repellendus suscipit provident quisquam iure non. Vero, nostrum! Culpa id tempore nemo praesentium vel. Amet aliquam magni aut sapiente ratione doloremque ab veritatis sed alias! Quas expedita ullam incidunt eum, rem repellendus error temporibus similique laboriosam quia dolorem voluptatibus perferendis, architecto asperiores nisi aspernatur aperiam sed maxime distinctio velit deleniti provident, maiores iusto. Optio sit officiis fugiat ullam cupiditate deserunt. Maxime, quo.</p> 
        </section>
      </div>

         <footer className='footer'>
         <a href="http://www.instagram.com/slavalasiychuk/?igshid=rvivm09cjvhg&hl=en" target="_blank"><i className="fab fa-instagram-square "></i></a>
            <a href="http://www.linkedin.com/in/iaroslav-lasiichuk-2974571a5/" target="_blank"> <i className="fab fa-linkedin"></i></a>
            <a href="http://github.com/IaroslavLasiichuk" target="_blank"><i className=" fab fa-github-square"></i></a>
        </footer>
      
      </div>
    )

  };
  
  export default About;