import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
    };
  }
  render() {
    //conditional if/else rendring 1st approach
    // if (this.state.isLoggedin) {                             
    //   return <div>Hey my name is Himanshu</div>;
    // } else {
    //   return <div>Welcome to my world</div>;
    // }

    //Element Variable    2nd approach
    // let message
    // if(this.state.isLoggedin){
    //     message= <div>Hey my name Himanshu</div>
    // }else{
    //     message=<div>Welcome to my world</div>
    // }
    // return(<div>{message}</div>)

    //Ternary conditional operator    3rd approach
    return(this.state.isLoggedin?
        <div>Hey my name is Himanshu</div>:
        <div>Welcome to my world</div>
     )
  }
}

export default UserGreeting;
