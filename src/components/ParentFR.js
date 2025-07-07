import React, { Component } from 'react'
import FRInput from './FRInput'

 class ParentFR extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div><FRInput ref={this.inputRef}/>
      <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ParentFR