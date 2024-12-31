import "../css/contactus.css";
import "../css/productdisplay.css";
import React from "react";
import ContactClassB from "./ContactClassB";

class ContactClass extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   _id: 0,
    //   title: "default",
    //   isNew: "default",
    //   oldPrice: "0",
    //   price: 0,
    //   description:"default",
    //   category: "default",
    //   image:
    //     "https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.453157835.1694346094&semt=sph",
    //   rating: 4,
    //   quantity: 1,
    // };
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    const data = await fetch("https://fakestoreapiserver.reactbd.com/smart");
    const json = await data.json();
    console.log("json-data", json);
    this.setState({ products: json });
    // this.setState({
    //     _id: json[0]._id,
    //     title: json[0].title,
    //     isNew: json[0].isNew,
    //     oldPrice: json[0].oldPrice,
    //     price: json[0].price,
    //     description: json[0].description,
    //     category: json[0].category,
    //     image: json[0].image,
    //     rating: json[0].rating,
    //     quantity: json[0].quantity,
    //   });
  }

  render() {
    return (
      <div className="contact-container">
        <div className="contact-header">
          <h1>Class based Components</h1>
        </div>
        {console.log(this.state)}
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
            {console.log("Parent - Render")}
          </div>
        </div>
        <div className="product-container">
          {this.state.products.map((obj) => {
            return (
              <div className="product-details"  key={obj._id}>
                <img className="img-class-dress" src={obj.image}></img>
                <h2>{obj.title}</h2>
                <p>{obj.description}</p>
                <p className="product-price">Rating : {obj.rating}</p>
              </div>
            );
          })}
        </div>

        <ContactClassB name={"first"} />
        <ContactClassB name={"second"} />
      </div>
    );
  }
}
export default ContactClass;
