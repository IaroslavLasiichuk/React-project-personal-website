import React from 'react';
import '../Contact/contact.css';
import '/Users/yaroslavlasiiychuk/Desktop/react_project/my-app/src/style/module.css';
import '/Users/yaroslavlasiiychuk/Desktop/react_project/my-app/src/index.css';




const Contact = () => {

    return (
    
<div className='main-contact' >
     <div className='contact-page' >
       <h2 className='secondary-text'>Contact Me</h2>
       <h3> Would you like to contact me please fill out the info below and I will be in touch.</h3>
    </div>
     
     <form className='contact'>
        
        <label htmlFor="">First Name <span className='form-symbol'>*</span> </label>

        <input  type="text" name='firstName' placeholder='First Name'  />

        <label htmlFor="">Last Name <span className='form-symbol'>*</span> </label>

        <input type="text" name='lasttName' placeholder='Last Name' />

        <label htmlFor="">Email Address  <span className='form-symbol'>*</span> </label>

        <input type="text" name='email' placeholder='Email Address'  />

        <label htmlFor="">Subject <span className='form-symbol'>*</span> </label>

        <input type="text" name='text'placeholder='Subject' />

      
        <label htmlFor="">Message <span className='form-symbol'>*</span> </label>

        <input className='message-area' name='message' type="text" />
      

        <input className='btn' type="submit"/>    
        
    </form>
  
        <footer className='footer'>
        <a href="http://www.instagram.com/slavalasiychuk/?igshid=rvivm09cjvhg&hl=en" target="_blank"  rel="noreferrer"><i className="fab fa-instagram-square "></i></a>
            <a href="http://www.linkedin.com/in/iaroslav-lasiichuk-2974571a5/" target="_blank"  rel="noreferrer"> <i className="fab fa-linkedin"></i></a>
            <a href="http://github.com/IaroslavLasiichuk" target="_blank"  rel="noreferrer"><i className=" fab fa-github-square"></i></a>
        </footer>
    
    </div>
    ) 
  };
  
  export default Contact;