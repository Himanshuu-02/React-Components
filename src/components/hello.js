import React, { createElement } from "react";
// in jsx
const Hello= () => {
    //With jsx
//     return <div>
//         <h1>
//             I am pursuing B.Tech
//         </h1>
//     </div>

//Without jsx
        return React.createElement('div',{id:Hello},
            React.createElement('h1',null,"Hello World"))
}
export default Hello