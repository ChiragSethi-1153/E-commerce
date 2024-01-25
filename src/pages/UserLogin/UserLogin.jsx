import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './UserLogin.css'


const UserLogin = () => {

  const navigate = useNavigate();

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("users"))
    console.log(loggedUser)
    let flag = false
    if(loggedUser == null ){
      alert("You do not have an account kindly sign up")
      navigate('/signup')
    }
    else{
    loggedUser.map((item) => {
      if (email === item.email && password === item.password) {
        flag = true
      }
    })
    
    if(flag) {
    localStorage.setItem("user", JSON.stringify({email, password}))
    navigate("/")
  }
    else {alert("Invalid Credentails")}
}
  }

  return (
    <div className='login'>

      <div className='Login-form-box'>

        <div className='login-text-div'>
          <p className='login-text'>
            Login
          </p>
          <p>
            Don't have an account?
            <span className='signup-span'>
              <button className='signup-btn' onClick={() => navigate('/signup')}>
                Sign Up!
              </button>
            </span>
          </p>
        </div>

        <form onSubmit={handleLogin} className='login-form' >

          <label htmlFor='email'></label><br />
          <input type='email' name='email' value={email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <label htmlFor='password'></label><br />
          <input type='text' name='password' value={password} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} required />
          <br /><br />
          <Button variant="contained" type='submit' className='login-btn'>Login</Button>
        </form>
     </div>


    </div>
  )
}

export default UserLogin
