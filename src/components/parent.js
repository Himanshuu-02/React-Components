import React, { Component } from "react";
import Children from "./children";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`HEllo ${this.state.parentName} From ${childName}`);
  }
  render() {
    return (
      <div>
        <Children greetHandler={this.greetParent}/>
      </div>
    );
  }
}

export default Parent;
