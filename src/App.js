import './App.css';
import React from 'react'
import {Switch,Route} from "react-router-dom"; 
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./Pages/Auth/RegisterComplete";



const  App=()=> {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/register/complete" component={RegisterComplete}/>
    </Switch>
    </>
  );
}

export default App;
