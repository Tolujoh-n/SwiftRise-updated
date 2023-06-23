// eslint-disable-next-line no-unused-vars
import React from 'react';
import './signup.css'

const Signup = () => {
  return (
    <div className='form'>
      <div className='form-body'>
        <div className='username'>
            <label className='form-label' htmlFor="userName">Username</label>
            <input type='text' id='firstName' className='form-input' placeholder='Username' />
        </div>
        <div className='email'>
            <label className='form-label' htmlFor="email">Email</label>
            <input type='email' id='email' className='form-input' placeholder='Email' />
        </div>
        <div className='password'>
            <label className='form-label' htmlFor="password">Password</label>
            <input type='password' id='password' className='form-input' placeholder='Password' />
        </div>
        <div className='Repeat Password'>
            <label className='form-label' htmlFor="Repeat Password">Repeat Password</label>
            <input type='Password' id='Password' className='form-input' placeholder='Repeat Password' />
        </div>
        <div className='username'>
        <label className='form-label' htmlFor="userName">Your Bitcoin Wallet address</label>
        <input type='text' id='address' className='form-input' placeholder='Your Bitcoin Wallet address' />
    </div>
        <div className='Fotter'>
            <button type='submit' className='btn'>Register</button>
        </div>

      </div>
      
    </div>
  )
}

export default Signup;
