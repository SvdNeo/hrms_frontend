import React, { useState } from 'react';
import './style.css'
function Login() {
const [value,setValue] = useState({
    email:"",
    password:""
})
    const handleChange = (e) => {
setValue({...value,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' autoComplete='off' onChange={handleChange} className='form-control rounded-0' />
          </div>
          <div className='form-group mb-3'>
            <label htmlFor='password '>Password</label>
            <input type='password' name='password' placeholder='Password' autoComplete='off' onChange={handleChange}  className='form-control rounded-0' />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
