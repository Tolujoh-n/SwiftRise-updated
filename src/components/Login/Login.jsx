// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Login.css"

const Login = () => {
  return (
    <div className='form'>
        <div className='form-body'>
            <div className='username'>
                <label className='form-label' htmlFor='username'>Username</label>
                <input type='text' id='username' className='form-unput' placeholder='Username' />
            </div>
            <div className='username'>
                <label className='form-label' htmlFor='username'>Username</label>
                <input type='text' id='username' className='form-unput' placeholder='Username' />
            </div>
            <div className='Footer'>
                <button type='submit' className='btn'>Login</button>
            </div>
        </div>
    </div>


  )
}

export default Login;
