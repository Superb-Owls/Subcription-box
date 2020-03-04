// register new user page
import React, { useState, useContext } from 'react'; //useEffect is unused, deleted by ZG
import LoginContext from '../utils/loginContext'
// import axios from 'axios';
// import bcrypt from 'bcryptjs'
// import Login from './login';
import { withRouter, useHistory } from 'react-router-dom';
import './register.css'

function Register() {
    const [email, setEmail] = useState('')
    const [localUsername, setLocalUsername] = useState('')
    const [password, setPassword] = useState('');
    let history = useHistory();
    let { username, handleRegisterSubmit } = useContext(LoginContext) //isAuthenticated is unused, delted by ZG
    const newSubmit = event => {
        event.preventDefault();
        console.log(event)
        handleRegisterSubmit(localUsername, email, password, redirect)
        // history.push('/login')

    }
    const onInputChange = (e) => {
        if (e.target.name === "username") {
            setLocalUsername(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
        console.log(username)
        console.log(localUsername)
    }
    const redirect = (location) => {
        return history.push('/' + location)
    }

    console.log(email)
    console.log(username)
    return (
        <>
            <div className='regCtn'>
                <h1>Register</h1>
                <div className="registerContain">
                    <div>
                        <label for="name">Name</label>
                        <input id="regname" name="username" onChange={onInputChange} required></input>
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" onChange={onInputChange} required></input>
                    </div>
                    <div>
                        <label for="password">password</label>
                        <input type="password" id="password" name="password" onChange={onInputChange} required></input>
                    </div>
                    <button className="regbtn" onClick={newSubmit}>Register</button>
                    <button className="regbtn"><a href='/login'>Login</a></button>
                </div>
                {/* <a href="/login">Login</a> */}
                <br></br>
            </div>
        </>
    )

}


export default withRouter(Register);    