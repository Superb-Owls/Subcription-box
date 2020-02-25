import React from 'react';
import "./style.css"

function LoginForm() {
  return (
    <form>
     <label className="loginInfo">Email</label>
      <input  type="email" placeholder="" />
      <label className="loginInfo">Password</label>
      <input  type="password" placeholder="" />
    </form>
  );
}

export default LoginForm;
