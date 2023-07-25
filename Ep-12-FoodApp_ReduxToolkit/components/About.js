import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    console.log("Parent constructor");
    super(props);
    this.state = {
      name: "Demo",
      location: "Demo",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/sandeep2601");
    const data = await response.json();
    this.setState({
      name: data.name,
      location: data.location,
    });
    console.log("Parent componentDidMount", data);
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <div>About Us Page</div>
        <br />
        <UserContext.Consumer>
          {(data) => <h1>User: {data.loggedInUser}</h1>}
        </UserContext.Consumer>
        <br />
        {/* <User name="Sandeep Verma" location="New Delhi" /> */}
        <UserClass
          name={"Child 1 " + this.state.name}
          location={this.state.location}
        />
        <UserClass name="Child 2" location="New Delhi" />
        <UserClass name="Child 3" location="New Delhi" />
      </>
    );
  }
}

export default About;
