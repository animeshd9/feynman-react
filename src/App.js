// import React, {useState , useEffect} from 'react';
// import Header from './components/Layout/Header'
// import Body from './components/Layout/Body'
// import Footer from './components/Layout/Footer';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './components/Auth/SingUp';
import SignIn from './components/Auth/SingIn';
import Home from "./components/Content/home/home"
import { AuthProvider } from './components/Auth/auth';
import PrivateRoute from './components/hoc/PrivateRoute';

export default function App(){

    return (
        <AuthProvider>
        <Router>
            <div>
                <PrivateRoute exact path='/' component={Home}/>
                <Route exact path="/singin" component={SignIn}/>
                <Route exact path="/singup" component={SignUp} />
            </div>
        </Router>
        </AuthProvider>

    )

}
