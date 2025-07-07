import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.reactRef = React.createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    // this.reactRef.current.focus()
    // console.log(this.reactRef)
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  clickHandler = () => {
    alert(`${this.reactRef.current.value} ${this.cbRef.value}`);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.reactRef}></input>
        <input type="text" ref={this.setcbRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
