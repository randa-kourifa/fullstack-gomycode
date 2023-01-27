import "./App.css";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "randa kourifa",
        bio: "A Mechanical engineer",
        imgSrc: "/checkpoint12/src/assets/john.jpeg",
        profession: "futur Developer",
      },
      show: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Hide" : "Show"} Profile
        </button>
        {this.state.show && (
          <div>
            <img
              src={this.state.person.imgSrc}
              alt={this.state.person.fullName}
            />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.mountedTime = Date.now();
    setInterval(() => {
      console.log(
        `Time since component mounted: ${Math.floor(
          (Date.now() - this.mountedTime) / 1000
        )} seconds`
      );
    }, 1000);
  }
}

export default App;
