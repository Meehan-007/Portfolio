import React, { useState } from 'react'; 
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2'; 
import { validateEmail } from '../../utils/helpers'; 






function ContactForm() { 

  const SERVICE_ID = "service_jxwzr3o";
const TEMPLATE_ID = "template_wjmjyql";
const USER_ID = "K7xKhhWwXTxxaJhTV"; 

  const [formState, setFormState] = useState({ name: '', from_email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, from_email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) { 

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
      
      
    
  };

  const handleChange = (e) => { 
    

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className='column full center margin-top '>
      <h1 className='py-2'>Contact me</h1>
      <form id="contact-form"  onSubmit={handleSubmit}> 
      
        <div className='my-5 column'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className='my-5 column'>
          <label htmlFor="from_email">Email address:</label>
          <input type="email" name="email" defaultValue={from_email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" className='reghover' type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;