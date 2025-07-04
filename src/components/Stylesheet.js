import React from "react";
import './Style.css';

function Stylesheet(props) {
    let classname= props.primary? 'primary':''
  return (
    <div>
      <h1 className={`${classname} font-size`}>Stylesheet</h1>
    </div>
  )
}
export default Stylesheet;
