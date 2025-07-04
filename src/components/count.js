import React, { Component } from "react";

export class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
 increament() {
//     this.setState({
//       count: this.state.count + 1,
//     },
//       () => {
//         console.log("Callback Value", this.state.count);
//       });
 this.setState(prevState =>({
    count: prevState.count+1

 }))
   console.log(this.state.count) 
  }
  increamentFive(){
    this.increament()
    this.increament()
    this.increament()
    this.increament()
    this.increament()
  }
  render() {
    return (
      <div>
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => this.increamentFive()}>Increament</button>
        </div>
      </div>
    );
  }
}

export default Count;
