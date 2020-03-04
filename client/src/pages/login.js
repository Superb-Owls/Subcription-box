import React, { Component, useContext, useEffect, useState } from 'react';
import axios from 'axios'
import LoginContext from '../utils/loginContext'
import {withRouter, useHistory } from 'react-router-dom';
import './login.css'

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false)
    // const [isAuth, setIsAuth] = useState(false)
    let history = useHistory();
    let {username, isAuthenticated, handleLoginSubmit} = useContext(LoginContext);
    const newSubmit = event => {
        event.preventDefault();
        console.log(event);
        handleLoginSubmit(email, password, redirect)
    }
    const onInputChange = (e)=>{
        if (e.target.name === "email"){
            setEmail(e.target.value)
        }else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    }

    const redirect = (location)=>{
        return history.push('/'+location)
    }
    // const authfun = ()=>{
    //     return true
    // }

    return(
        <>
        <div className="logWrap">
        <div className='logCtn'>
        <h1>Login</h1>

<div className="loginContain">
    <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" onChange={onInputChange} required></input>
</div>
<div>
    <label for="password">password</label>
    <input type="password" id="password" name="password" onChange={onInputChange} required></input>
</div>
<button className='logBtn' onClick={newSubmit}>Login</button>
<button className='logBtn'><a href='/register'>Register</a></button>
</div>
</div>  
</div>
    </>
    )
}
export default Login;