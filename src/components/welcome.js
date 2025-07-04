// class components
import React, {Component} from "react";
class Welcome extends Component {
    
    render(){
        const {name,member,children}= this.props
        return (<div>
            <h1>Welcome {name}  Position{member}</h1>
            {children}
        </div>)
        
    }
}
export default Welcome