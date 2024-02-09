import React from 'react';
import './login.css'

function LoginForm() {
  return (
    <form action="login.html" className="login-form">
      <h1>Login</h1>
      <div className="txtb">
        <input type="text" placeholder="Username" />
      </div>
      <div className="txtb">
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" className="logbtn" />
      <div className="bottom-text">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </form>
  );
}

export default LoginForm;

