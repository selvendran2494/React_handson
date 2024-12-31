import React from "react";

const User = ({ name, position }) => {
  return (
    <div className="team-member">
      <img alt="Team Member" className="team-img" />
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

export default User;
