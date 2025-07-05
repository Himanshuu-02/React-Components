//It is the mounting lifecycle method
import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:" Himanshu",
    };
    console.log("LifecycleA construstor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA static getDerivedFromProps");
    return null;
  }
  shouldComponentUpdate(){
    console.log("LifecycleA shouldComponentUpdate")
    return true;
  }
  getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log("LifecycleA getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate(){
    console.log("Lifecycle componentDidUpdate")
  }
  componentDidMount() {
    console.log("LifecycleA componentdidmount");
  }
  changeState = ()=>{
    this.setState({
        name:"Engineer"
    })
  }
  render() {
    console.log("LifecycleA render");
    return (<div><h1>Lifecycle A</h1>
    <button onClick={this.changeState}>Change State</button>
    <LifecycleB/>
    </div>);
  }
}

export default LifecycleA;
