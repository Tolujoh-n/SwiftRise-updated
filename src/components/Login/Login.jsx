import React from 'react';
import "./Login.css"

const Login = () => {
  return (
    <>
    <div className="row col-12 d-flex justify-content-center text-white">
          <h3>Login</h3>
      </div>
      <div className="form">
                      <div className="email">
                          <label className="form__label" />Email </label>
                      <input type="email" id="email" className="form__input" placeholder="Email" />
                  </div>
                  <div className="password">
                      <label className="form__label" />Password </label>
                  <input className="form__input" type="password" id="password" placeholder="Password" />
          <div class="footer">
              <button type="submit" class="btn">Login</button>
          </div
        </div>
    )       
}


export default Login;
