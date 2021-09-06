import './App.css';
import React, { useEffect } from 'react'
import {Switch,Route} from "react-router-dom"; 
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./Pages/Auth/RegisterComplete";
import {auth} from './firebase'
import {useDispatch} from 'react-redux'



const  App=()=> {

   const dispatch = useDispatch();
  
  //  to check firebase auth
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(async (user)=>{
     if(user){
       const idTokenResult = await user.getIdTokenResult();


       dispatch({
         type: 'LOGGED_IN_USER',
         payload : {
            email : user.email,
            token : idTokenResult.token,
         }
       })
     }
   })
  //  clean up
    return () => unsubscribe();
  }, [])
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
