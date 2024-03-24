"use client"
import React, { useState } from 'react'

const page = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = () => {
        console.log(email,password);
    }

    const login =() => {
        console.log(email,password);
    }

  return (
    <div className="flex-container">
    <div className="form-container">
        <div className='form_head'>{show?<h2>Start Your Journey</h2>:<h2>Sign In To An Existing Account</h2>}</div>
      <div className="form">
        <div className="form-group">
          <label for="email" className="label">Email Id</label>
          <div className="input-container">
            <input
             value={email}
              onChange={(e)=>setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input"
            />
          </div>
        </div>
  
        <div className="form-group">
          <div className="flex items-center justify-between">
            <label for="password" className="label">Password</label>
            <div className="password-text">
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
          </div>
          <div className="input-container">
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input"
            />
          </div>
        </div>
  
        {show?<div className="form-group">
          <button
            onClick={register}
            className="submit-button"
          >
            Register
          </button>
        </div>:
        <div className="form-group">
          <button
           onClick={login}
            
            className="submit-button"
          >
            Log In
          </button>
        </div>}
      </div>
  
      <p className="register-text">
        {show?<a onClick={()=>setShow(!show)}  className="register-link">Have an account? Sign in instead.</a>:
        <a onClick={()=>setShow(!show)}  className="register-link">Need to create an account? Register here.</a>}
      </p>
    </div>
  </div>
  )
}

export default page
