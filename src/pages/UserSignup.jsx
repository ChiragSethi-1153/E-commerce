import React from 'react'

const UserSignup = () => {
  return (
    <div>
      <form>
        <label htmlFor='name'>Enter Your Name</label><br />
        <input type='text' name='name' />
        <br />
        <label htmlFor='email'>Enter Your Email</label><br />
        <input type='email' name='email' />
        <br />
        <label htmlFor='password'>Set Your Password</label><br />
        <input type='text' name='password' />
      </form>
    </div>
  )
}

export default UserSignup
