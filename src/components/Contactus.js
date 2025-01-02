import { useState } from "react";
import "../css/contactus.css";
import ContactClass from "./ContactClass";

const Contactus = () => {
  const [contactForm, setContactForm] = useState({
    name: "name",
    email: "abc@gmail.com",
    message: "Hello I am a developer !!"
  });

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    // setContactForm((prevForm) => ({
    //   ...prevForm,
    //   [name]: value
    // }));   
    setContactForm({
      ...contactForm,
      [name]:value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stopping page to reload why because since it is a form it will reload the page while submitting
    console.log(contactForm);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={contactForm.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          <p>The name is {contactForm.name}</p>
        </div>
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          <p><strong>Email:</strong> contact@company.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
      </div>
      <ContactClass />
    </div>
  );
};

export default Contactus;