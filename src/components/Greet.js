// function components
import React from "react";

// function greet(){
//     return <h1>Hello Himanshu</h1>
// }
// in Es6
//  const Greet = () => <div>
//     <h1>Hello Himanshu</h1>
//     </div>

//for props
const Greet=(props )=>{
    // console.log(props)
    const{name,hero,children}=props
    return (<div> 
        <h1>Hello {name}, Fav Hero: {hero}</h1>
        {children}
        </div>
    )

}

export default Greet
