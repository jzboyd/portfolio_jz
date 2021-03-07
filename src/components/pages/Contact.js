import React from 'react';
import '../../App.css';
import emailjs from 'emailjs-com';


function Contact() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_iyjivmb', 'template_rdw5vx9', e.target, 'user_J2qvlJay43uXxnGDwFxU2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Phone</label>
        <input type="phone" name="user_phone" />
        <label>Company</label>
        <input type="company" name="user_company" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }

  export default Contact