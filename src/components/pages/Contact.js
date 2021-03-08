import React, { useState } from 'react';
import '../Contact.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form'
import email from '../../images/Email.png'
import { init, sendForm } from 'emailjs-com';
init('user_J2qvlJay43uXxnGDwFxU2')



const Contact = () => {
const { register, handleSubmit, watch, errors } = useForm();
const [statusMessage, setStatusMessage] = useState("Message");
const [contactNumber, setContactNumber] = useState("000000");


const generateContactNumber = () => {
  const numStr = "000000" + (Math.random() * 1000000 | 0);
  setContactNumber(numStr.substring(numStr.length - 6))
}

const onSubmit = (data) => {
  const form = document.querySelector('#contact-form')
  const statusMsg = document.querySelector('.status-message')


generateContactNumber();

sendForm('service_iyjivmb', 'template_rdw5vx9', '#contact-form')
    .then( r => {
    console.log('Success!', r.status, r.text);
    form.reset();
    setStatusMessage("Message sent!");
    statusMsg.className = 'status-message success'
    setTimeout(() => {
      statusMsg.className = 'status-message'
    }, 4000)
  }, error => {
    console.log('Failed...', error)
    setStatusMessage('Failed to send message');
    statusMsg.className = 'status-message fail';
    setTimeout(() => {
      statusMsg.className = 'status-message'
    }, 4000)
  })
}



const message = watch('message') || "";
const messageCharsLeft = 1500 - message.length;
  
    return (
      <>
      <h1>Contact</h1>
      <img src={email} alt="email" />
       <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="contact_number" value={contactNumber} />
       
        {/* <label>Name</label> */}
        {errors.user_name && errors.user_name.type === "required" && (<div role="alert">*Name is required<br/></div>)}
        <input 
        type="text" 
        name="user_name" 
        placeholder='Name'
        maxLength='30'
        aria-invalid={errors.name ? "true" : "false"}
        ref={register({ required: true})}
        /> 
        {/* <label>Email</label> */}
        {errors.user_email && errors.user_email.type === "required" && (<div role="alert">*Email is required<br/></div>)}
        <input 
        type="email" 
        name="user_email" 
        placeholder='E-mail'
        maxLength='30'
        aria-invalid={errors.phone ? "true" : "false"}
        ref={register({ required: true})}
        />
        {/* <label>Phone</label> */}
        <input 
        type="phone" 
        name="user_phone" 
        placeholder='Phone'
        />
        {/* <label>Company</label> */}
        <input 
        type="company" 
        name="user_company" 
        placeholder='Company' 
        />
        {/* <label>Message</label> */}
        {errors.message && errors.message.type === "required" && (<div role="alert">*A message is required<br/></div>)}
        <textarea 
        name="message" 
        placeholder='Message'
        maxLength='1500'
        aria-invalid={errors.message ? "true" : "false"}
        ref={register({ required: true})}
        />
        <p className='message-chars-left'>{messageCharsLeft}</p>
        <br/>
        <p className='status-message'>{statusMessage}</p>
        <input type="submit" value="Send" />
       
      </form>
         
      
     </>
    );
  }

  export default Contact

