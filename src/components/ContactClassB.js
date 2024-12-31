import React from "react";
class ContactClassB extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child-Constructor" +'-' + this.props.name);
  }
  componentDidMount() {
    console.log("Child-Component-did-mount" +'-' + this.props.name);
  }
  render() {
    return (
      <div>
        {console.log("Child-Render" +'-' + this.props.name)}
        This is Class B Component to have a knowledge about Life cycle method .
        Pleasse check in console ...
      </div>
    );
  }
}
export default ContactClassB;
