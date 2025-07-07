import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

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
        name: "Human",
      });
    }, 2000);
  }
  render() {
    console.log("**********************Parent Component render***************")
    return <div><h1>Parent Component
    {/* <RegComp name={this.state.name}></RegComp>
    <PureComp name={this.state.name}></PureComp> */}
    <MemoComp name={this.state.name}></MemoComp>
    </h1>
    </div>;
  }
}

export default ParentComp;
