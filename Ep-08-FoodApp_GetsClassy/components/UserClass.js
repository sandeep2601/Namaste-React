import React, { Component } from "react";

export class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: sandeepverma</h4>
      </div>
    );
  }
}

export default UserClass;
