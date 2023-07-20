import React from 'react';
import './contact.css';

function Contact()
{
  const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Query Has Been Successfully Sent");
    
  };

  return (
   
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Toy Shop - Contact Us</title>
  <link rel="stylesheet" href="styles.css" />
  <div className="contact-page">
    <h2>Contact Us</h2>
    <p>If you have any questions or inquiries, feel free to reach out to us!</p>
    <form id="contact-form" className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Enter your message" rows={5} required defaultValue={""} />
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</div>

  );
}
};

export default Contact;


