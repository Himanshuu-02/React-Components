import React, { Component } from "react";

export class Classclick extends Component {
  clickHandler() {
    console.log("Button is clicked in class component");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default Classclick;
