import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    console.log("Parent constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <div>About Us Page</div>
        {/* <User name="Sandeep Verma" location="New Delhi" /> */}
        <UserClass name="Sandeep Verma" location="New Delhi" />
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <div>About Us Page</div>
//       <User name="Sandeep Verma" location="New Delhi" />
//       <UserClass name="Sandeep Verma" location="New Delhi" />
//     </>
//   );
// };

export default About;
