import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Himanshu",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Himanshu",
      });
    }, 2000);
  }
  render() {
    console.log("**********************Parent Component render***************")
    return <div><h1>Parent Component
    <RegComp name={this.state.name}></RegComp>
    <PureComp name={this.state.name}></PureComp>
    </h1>
    </div>;
  }
}

export default ParentComp;
