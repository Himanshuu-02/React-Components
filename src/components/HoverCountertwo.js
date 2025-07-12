import React, { Component } from 'react'

 class HoverCountertwo extends Component {
//       constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   ClickHandler = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   };
  render() {
     const {count,ClickHandler}=this.props
    return (
      <div> <h1 onMouseDown={ClickHandler}>
           Hover {count} times</h1></div>
    )
  }
}

export default HoverCountertwo