import React from "react";

const primary = {
  color: "blue",
  fontSize: "72px",
};

function Inlinestyle() {
  return (
    <div>
        <h1 className='error'>Error</h1>
        <div style={primary}>
      Inline
    </div>

    </div>
    
  )
}
export default Inlinestyle;
