import React from 'react';
import '../Contact/contact.css';
import {Footer} from '../Footer/Footer';

export const Contact = () => (
    
    <div className='main-contact'>
      <div className='contact-page'>
        <h2 className='secondary-text'>Contact Me</h2>
        <h3> Would you like to contact me please fill out the info below and I
          will be in touch.</h3>
      </div>
      
      <form className='contact'>
        
        <label htmlFor="">First Name <span className='form-symbol'>*</span>
        </label>
        
        <input type="text" name='firstName' placeholder='First Name'/>
        
        <label htmlFor="">Last Name <span className='form-symbol'>*</span>
        </label>
        
        <input type="text" name='lasttName' placeholder='Last Name'/>
        
        <label htmlFor="">Email Address <span className='form-symbol'>*</span>
        </label>
        
        <input type="text" name='email' placeholder='Email Address'/>
        
        <label htmlFor="">Subject <span className='form-symbol'>*</span>
        </label>
        
        <input type="text" name='text' placeholder='Subject'/>
        
        
        <label htmlFor="">Message <span className='form-symbol'>*</span>
        </label>
        
        <input className='message-area' name='message' type="text"/>
        
        
        <input className='btn' type="submit"/>
      
      </form>
      
      <Footer/>
    </div>
);