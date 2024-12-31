import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="team-member">
        <img alt="Team Member" className="team-img" />
        <h3>{this.props.name}</h3>
        <p>{this.props.position}</p>
      </div>
    );
  }
}
export default UserClass;
