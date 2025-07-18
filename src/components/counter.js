import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }   
    ClickHandler=()=>{
        this.setState(prevState=>{
            return {count: prevState.count+1}
        })
    }
  render() {
    return (
      <div>{this.props.render(this.state.count, this.ClickHandler)}</div>
    )
  }
}

export default Counter