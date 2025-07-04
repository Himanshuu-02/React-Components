import React from "react";

function Keyindex() {
  const names = ["Bruce", "Diana", "Rosy",'Bruce'];
  const namelist = names.map((name, index) => <h2 key={index}>{index}{name}</h2>);

  return <div>{namelist}</div>;
}
export default Keyindex;
