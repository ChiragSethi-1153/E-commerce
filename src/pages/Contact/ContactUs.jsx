import React from 'react'
import './Contact.css'
import { Button } from '@mui/material'

const ContactUs = () => {
  return (
    <div className='contactus'>
      <div className="contactUsForm">
        <h1>Send your queries here</h1>
       <form className="contactus-form">
         
         <input type="text" id="name" name="name" placeholder="Your name.." />
         <input type="email" id="email" name="email" placeholder="Your email.." />
     
         
         <textarea id="subject" name="subject" placeholder="Write something.." style={{}} ></textarea>
     
         <Button variant='contained' type='submit' className='contactus-btn' >Submit</Button>
       </form>
     </div>
    </div>
  )
}

export default ContactUs
