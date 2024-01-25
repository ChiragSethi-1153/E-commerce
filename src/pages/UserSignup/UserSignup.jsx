import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './UserSignup.css'
import Candle from '../../assets/images/candle.png'
import validator from 'validator'
import Role from '../../components/Role/Role';

const UserSignup = () => {

  const navigate = useNavigate();



  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState('')
  const [emailErrorMsg, setEmailErrorMsg] = useState('')

  const [adminName, setAdminName] = useState('Admin');
  const [adminEmail, setAdminEmail] = useState('Admin@email.com')
  const [adminPassword, setAdminPassword] = useState("Admin@123") 
 


  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }

  function handleEmail(event) {
    let inputValue = event.target.value;
    setEmail(inputValue);

    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue)) {
      setEmailErrorMsg("invalid email.");
    } else {
      setEmailErrorMsg("");
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"))
    let admins = JSON.parse(localStorage.getItem('admins'))
    
    if (errorMessage == 'Is Not Strong Password') {
      alert('Set your Password correctly')
    }
    else {
      if (users === null) {
        users = []
        users?.push({ name, email, password })
        localStorage.setItem("users", JSON.stringify(users))
      }
      else {
        users?.push({ name, email, password })
        localStorage.setItem("users", JSON.stringify(users))
      }
      navigate('/login');
    }
  }

  return (
    <div className='signup'>

      <div className='signup-left'>
        <div className='signup-form-box'>
          <div className='join-div'>
            <p className='join'>
              Sign Up
              <span className='joinus-span'>
                !
              </span>
            </p>
            <p>Do you have an account?  <span><button className='login-btn' onClick={() => navigate('/login')}>Login</button></span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className='signup-form'>

          <Role />

            <label htmlFor='name'></label><br />
            <input type='text' name='name' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <br />
            <label htmlFor='email'></label><br />
            <input type='email' name='email' placeholder='Enter Your Email' value={email} onChange={handleEmail} required />
            <p style={{ color: "red" }}> {emailErrorMsg}</p>
            <br />
            <input type='text' name='password' placeholder='Set Your Password' value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                validate(e.target.value)
              }}
              required />

            <p>
              {errorMessage === '' ? null :
                <span style={{
                  fontWeight: 'normal',
                  color: 'red',
                }}>{errorMessage}
                </span>}
            </p>


            <br /><br />
            <Button variant="contained" className='signup-btn' type='submit'>Sign Up</Button>

          </form>
                <br />

          

        </div>
      </div>
      <div className='signup-right'>
        <img src={Candle} alt="candle" className='signup-img' />
        <p className='signup-img-text'>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
      </div>
    </div>
  )
}

export default UserSignup
