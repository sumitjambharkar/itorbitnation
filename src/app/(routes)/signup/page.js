"use client"
import config from '@/config'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
   
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const register = async() => {
        try {
          const result = await axios.post(`${config}/api/register`,{email,password})
          console.log(result);
        } catch (error) {
          console.log(error);
        }
    }

    const login =async() => {
      try {
        const result = await axios.post(`${config}/api/login`,{email,password})
        console.log(result);
        router.push("/")

      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="flex-container">
    <div className="form-container">
        <div className='form_head'>{show?<h2>Start Your Journey</h2>:<h2>Sign In To An Existing Account</h2>}</div>
      <div className="form">
        <div className="form-group">
          <label  className="label">Email Id</label>
          <div className="input-container">
            <input
             value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              required
              className="input"
            />
          </div>
        </div>
  
        <div className="form-group">
          <div className="flex items-center justify-between">
            <label  className="label">Password</label>
            <div className="password-text">
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
          </div>
          <div className="input-container">
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
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
