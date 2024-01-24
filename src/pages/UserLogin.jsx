import React, {useState} from 'react'
import { Button, bottomNavigationActionClasses} from '@mui/material'
import { useNavigate } from 'react-router-dom'


const UserLogin = () => {

  const navigate = useNavigate();

  const [password,setPassword]= useState("")
  const [email,setEmail]= useState("") 

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("users"))
    console.log(loggedUser)
    let flag=false
    loggedUser.map((item) => {
        if(email === item.email && password === item.password){
            flag= true
        }
    } )
   flag?navigate("/"):alert("Invalid Credentails")
  }

  return (
    <div>
      <form onSubmit={handleLogin} >
        
        <label htmlFor='email'>Enter Your Email</label><br />
        <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}  />
        <br />
        <label htmlFor='password'>Enter Your Password</label><br />
        <input type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
         <br /><br />
         <Button variant="contained" type='submit'>Login</Button>
     
      </form>
    </div>
  )
}

export default UserLogin
