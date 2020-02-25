import React from 'react';
import "./style.css"

function SignUpForm() {
  return (
    <form>
      <label className="signUpInfo">First Name</label>
      <input type="text" placeholder="" />
      <label className="signUpInfo">Last Name</label>
      <input  type="text" placeholder="" />
      <label className="signUpInfo">Email</label>
      <input  type="email" placeholder="" />
      <label className="signUpInfo">Password</label>
      <input  type="loginInfo" placeholder="" />
    </form>
  );
}

export default SignUpForm;
