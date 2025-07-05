//It is the mounting lifecycle method
import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:" Himanshu",
    };
    console.log("LifecycleB construstor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB static getDerivedFromProps");
    return null;
  }
   shouldComponentUpdate(){
    console.log("LifecycleB shouldComponentUpdate")
    return true
  }
  getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log("LifecycleB getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate(){
    console.log("LifecycleB componentDidUpdate")
  }
  componentDidMount() {
    console.log("LifecycleB componentdidmount");
  }
  render() {
    console.log("LifecycleB render");
    return <div><h1>Lifecycle B</h1></div>;
  }
}

export default LifecycleB;
