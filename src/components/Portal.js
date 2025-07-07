import React from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <div>
      <h1>Portal Component</h1>
    </div>,
    document.getElementById("portal-root")
  );
}
export default Portal;
