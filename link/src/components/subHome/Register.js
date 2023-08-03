import React from 'react'
import { Link } from 'react-router-dom'

function Register({space}) {
  return (
    <div>
    <div className={`container register `}>
      

      <div className={`card_container ${!space?"":"open"}`}>
      
      <div className='card col-md-4 p-3'>
      <div className='register_title'><h1>Register</h1></div>
        <div >
            <label className='register_input_title'>Full Name</label>
            <input className='register_input' placeholder='Full Name' name='fullname' type='text'/>
        </div>
        <div>
            <label className='register_input_title'>Username</label>
            <input className='register_input' placeholder='Username' name='username' type='text'/>
        </div>
        <div>
            <label className='register_input_title'>Email</label>
            <input className='register_input' placeholder='Email' name='email' type='email'/>
        </div>
        <div>
            <label className='register_input_title'>Password</label>
            <input className='register_input' placeholder='Password' name='password' type='password'/>
        </div>
        <div>
            <label className='register_input_title'>Confirm Password</label>
            <input className='register_input' placeholder='Confirm Password' name='password' type='password'/>
        </div>
        <div className='log_btn'>
            <input type='submit' className='register_btn btn my-2' placeholder='Name'/>
        </div>
        <Link to="/forgot/password" >
            Forgot password?
        </Link>
        <div>
            Already having an account? <Link to="/signin">Signin</Link>
        </div>
    </div>
      </div>

    

    </div>
    </div>

  )
}

export default Register
