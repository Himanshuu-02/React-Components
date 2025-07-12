import React, { Component } from 'react'

 class ClickCountertwo extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //     count:0
    //   }
    // }   
    // ClickHandler=()=>{
    //     this.setState(prevState=>{
    //         return {count: prevState.count+1}
    //     })
    // }
  render() {
     const {count,ClickHandler}=this.props
    return (
      <div><button onClick={ClickHandler}>Click {count} times</button></div>
    )
  }
}

export default ClickCountertwo