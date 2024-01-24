import React, { useState } from 'react'
import { Button } from '@mui/material'
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';



const UserSignup = () => {

  const navigate = useNavigate();
  


  const [name,setName]= useState("")
  const [password,setPassword]= useState("")
  const [email,setEmail]= useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
          let users =  JSON.parse(localStorage.getItem("users"))
          if(users===null){
            users=[]
            users?.push({name, email, password})
          localStorage.setItem("users", JSON.stringify(users) )
          }
          else{
          users?.push({name, email, password})
          localStorage.setItem("users", JSON.stringify(users) )
          }
          navigate('/login');
    } 
 
  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label htmlFor='name'>Enter Your Name</label><br />
        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor='email'>Enter Your Email</label><br />
        <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}  />
        <br />
        <label htmlFor='password'>Set Your Password</label><br />
        <input type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
         <br /><br />
         <Button variant="contained" type='submit'>Sign Up</Button>
     
      </form>
    </div>
  )
}

export default UserSignup
