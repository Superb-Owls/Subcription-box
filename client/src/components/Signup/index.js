import React from 'react';
import './style.css'
import './layout.css'

function Signup() {
    return (
        <>
            <div className="signupwrapper">
                <div className="signuplogo">
                    <img src="https://i.imgur.com/odFx7k6.png"></img>
                </div>
                <div className="signuptext">
                    <div className="signuptitle">
                        Join Us!
                    </div>
                    <div className="signupbody">
                        Join our team to receive the latest offers!
                    </div>
                    <a className="signuplink" href="/login">SIGN UP NOW</a>
                </div>
                <div className="signuplogo2">
                    <img src="https://i.imgur.com/6Ic6iId.png"></img>
                </div>
            </div>
        </>
    )
}
export default Signup;