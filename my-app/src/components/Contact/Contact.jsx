import React from 'react';
import '../Contact/contact.css';
import {Footer} from '../Footer/Footer';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSearchParams} from 'react-router-dom';

function validateForm(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(element => {
    if (element.value === '') {
      element.style = 'border: 1px solid red';
      toast(`placeholder please enter ${element.name}`);
      return false;
    } else if (element.type === 'email' &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.value)) {
      toast(`placeholder please enter valid email address`);
      return false;
      
    } else {
      element.style = '';
      document.querySelector('form').submit();
    }
  });
}

export const Contact = () => {
  const [searchParams] = useSearchParams();
  
  if (searchParams.get('message') !== '') {
    toast(searchParams.get('message'));
  }
  return (
      
      <div className='main-contact'>
        <div className='contact-page'>
          <h2 className='secondary-text'>Contact Me</h2>
          <h3> Would you like to contact me please fill out the info below and I
            will be in touch.</h3>
        </div>
        
        <form action='https://mikas.dev/prj/send/send.php' method='post'
              className='contact'>
          
          <label htmlFor="">First Name <span className='form-symbol'>*</span>
          </label>
          
          <input className='input' type="text" name='firstName'
                 placeholder='First Name'/>
          
          <label htmlFor="">Last Name <span className='form-symbol'>*</span>
          </label>
          
          <input className='input' type="text" name='lastName'
                 placeholder='Last Name'/>
          
          <label htmlFor="">Email Address <span className='form-symbol'>*</span>
          </label>
          
          <input className='input' type="email" name='email'
                 placeholder='Email Address'/>
          
          <label htmlFor="">Subject <span className='form-symbol'>*</span>
          </label>
          
          <input className='input' type="text" name='subject'
                 placeholder='Subject'/>
          
          
          <label htmlFor="">Message <span className='form-symbol'>*</span>
          </label>
          
          <textarea className='message-area input' name='message'
                    placeholder='Message'/>
          
          <input onClick={validateForm} className='btn' type="submit"/>
        
        </form>
        <ToastContainer/>
        <Footer/>
      </div>
  );
};