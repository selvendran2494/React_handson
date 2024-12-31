import "../css/contactus.css";
import ContactClass from "./ContactClass";


const Contactus = ()=>{
    return(
        <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            {/* <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form> */}
          </div>
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Email:</strong> contact@company.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
          </div>
        </div>
        <ContactClass/>
      </div>
    )
}
export default Contactus