import React, { Component } from 'react'

 class Eventbind extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message:" Hello"
      }
    //   this.clickHandler= this.clickHandler.bind(this)   //constructor binding apprach
    }
    clickHandler(){
        this.setState({
            message: "Good Bye!"
        })
    }
    // clickHandler=()=> {this.setState({                     //in the setstate function approach
    //     message: "Good bye!"
    // })}
  render() {
    return (
        
      <div><div>{this.state.message}</div>
      <button onClick={this.clickHandler.bind(this)} >Click</button></div>)   //approach no.1
        {/* <button onClick={()=> this.clickHandler()} >Click</button>    approach no.2*/}
        {/* <button onClick={this.clickHandler} >Click</button>  approach no.3*/}
        {/* <button onClick={this.clickHandler} >Click</button>    approach no.4*/}
       
    
  }
}

export default Eventbind