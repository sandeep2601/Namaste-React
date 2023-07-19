import React, { Component } from "react";

export class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");

    this.state = {
      count1: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  render() {
    console.log(this.props.name + " render");
    const { name, location } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Count1 : {count1}</h2>
        <h2>Count2 : {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: sandeepverma</h4>
      </div>
    );
  }
}

export default UserClass;
