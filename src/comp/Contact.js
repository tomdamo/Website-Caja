import React from 'react'
import './Contact.css'

export function Contact() {
  return (
<>
    <div className='container-contact'>
      <h1 className="display-4-contact">Contact</h1>
          <p className="lead">
      Send me an email <a href="mailto:contact@cajaboogers.com">contact@cajaboogers.com</a> <br></br>
      Message me on <a href='https://www.instagram.com/cajaboogers/' target="_blank" rel="noreferrer">Instagram</a>
           </p>
    </div>
</>
  )
}

export default Contact;

