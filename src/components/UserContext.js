//That is the step first of Context in react
//the context is created

import React from "react";

const UserContext=React.createContext()
const UserProvider= UserContext.Provider
const UserConsumer= UserContext.Consumer

export{UserProvider,UserConsumer}

//Step2- provide a context value
//step3- cosume the context value