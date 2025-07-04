import React from 'react'

 function Functionclick() {
    function clickHandler(){
        console.log("Button is clicked in function")
    }

  return (
    <div><button onClick={clickHandler}>click Me</button></div>
  )
}
export default Functionclick
