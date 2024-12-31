import "../css/contactus.css";
import React from "react";

class ContactClass extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  //   handleClick = () => {
  //     this.setState({ message: "Message sent successfully!" });
  //   };

  render() {
    return (
      <div className="contact-container">
        <div className="contact-header">
          <h1>Class based Components</h1>
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <button
              type="submit"
              className="submit-btn"
              onClick={() => {
                this.setState({ message: "Message sent successfully!" });
              }}
            >
              Send Message
            </button>
            {<p className="success-message">{this.state.message}</p>}
          </div>
        </div>
      </div>
    );
  }
}
export default ContactClass;
