import React from 'react'
// import { Link } from 'gatsby'
import './contact.css';
const Contact = () => {
 return (
   <div id="contact">
     <h2>Contact</h2>
     <form className="contact-form" action="https://formspree.io/harishchennupati2@gmail.com" method="POST">
       <label htmlFor="name">Name:</label>
       <input type="name" id="name" placeholder="John Doe" name="name"/>
       <label htmlFor="email">Email:</label>
       <input type="email" id="email" placeholder="johndoe@gmail.com" name="_replyto"/>
       <label htmlFor="message">Message:</label>
       <textarea name="message" placeholder="Type your message" id="message" cols="30" rows="10"></textarea>
       <input className="button" type="submit" value="Send" />
     </form>
   </div>
 )
}

export default Contact