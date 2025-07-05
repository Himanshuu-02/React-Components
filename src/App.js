import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Count from "./components/count";
import Functionclick from "./components/functionclick";
import Classclick from "./components/classclick";
import Eventbind from "./components/eventbind";
import Parent from "./components/parent";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import Keyindex from "./components/Keyindex";
import Stylesheet from "./components/Stylesheet";
import Inlinestyle from "./components/Inlinestyle";
import styles from "./appStyle.module.css";
import "./appStyle.css";
import Form from "./components/form";
import LifecycleA from "./components/LifecycleA";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentComp/>
      {/* <LifecycleA/> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inlinestyle/> */}
      {/* <Form /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Keyindex/> */}
      {/* <List/> */}
      {/* <UserGreeting/> */}
      {/* <Parent/> */}
      {/* <Eventbind/> */}
      {/* <Functionclick/> */}
      {/* <Classclick/> */}
      {/* <Count/> */}
      {/* <Message/> */}
      {/* <Greet name="Himanshu" hero="spider-man">
        <button>click Me</button>
        </Greet>   */}
      {/* <Welcome name="Pardeep" member="Helper">
        <button>Get Details</button> </Welcome> 
       */}
      {/* <Greet name="Akashay" hero="bat-man">
        <p>hey he is my friend</p></Greet>
      <Greet name="Human" hero="bat-man"/>
       <Welcome name="Aashish" member="Team-Member">
        <button>Get Details</button> </Welcome>
       <Welcome name="Vijay" member="Team-Head">
        <button>Get Details</button> </Welcome> 
      
       */}
    </div>
  );
}

export default App;
