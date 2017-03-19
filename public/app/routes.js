/**
 * Created by mlingolu on 3/15/17.
 */

import React, {Component} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';

import Base          from "./components/base.component";
import HomeComponent from "./components/home.component";
import LoginContainer from "./containers/login.container";
import SignUpContainer from "./containers/signup.container";

const routes =[
    {
        path:'/',
        component : HomeComponent
    },
    {
        path:'/login',
        component:LoginContainer
    },
    {
        path:'/signup',
        component:SignUpContainer
    }
];

export default routes;