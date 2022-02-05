import React from 'react';
import '../About/about.css';
import {Footer} from '../Footer/Footer';
import picture from '../../img/8L0A0474.jpg'

export const About = () => (
    <div>
      <div className='hero'>
        <aside>
          <img className='primary-img'
               src={picture}
               alt="Picture with Iarosval Lasiichuk"
          />
        </aside>
        
        <main>
          <h2 className='about-text'>Hi there! I'm Front end Developer!!!</h2>
        </main>
        
        <section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            placeat molestiae. Dignissimos facilis ipsum modi repudiandae
            obcaecati. Quaerat esse eaque non perferendis ducimus? Alias, aut
            et explicabo ducimus praesentium deserunt delectus vitae
            dignissimos molestiae assumenda sed atque eius repellendus
            suscipit provident quisquam iure non. Vero, nostrum! Culpa id
            tempore nemo praesentium vel. Amet aliquam magni aut sapiente
            ratione doloremque ab veritatis sed alias! Quas expedita ullam
            incidunt eum, rem repellendus error temporibus similique
            laboriosam quia dolorem voluptatibus perferendis, architecto
            asperiores nisi aspernatur aperiam sed maxime distinctio velit
            deleniti provident, maiores iusto. Optio sit officiis fugiat ullam
            cupiditate deserunt. Maxime, quo.</p>
        </section>
      </div>
  
      <Footer/>
    
    </div>
);
