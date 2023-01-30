import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  authenticate, isAuthenticated, login } from '../../api/userAPi'
import Navbar from '../Layout/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast, ToastContainer } from 'react-toastify';
// toast is not working

const Login = () => {
  let [ email, setEmail] = useState("")
  let [ password, setPassword] = useState("")
  let [ error, setError ] = useState("")
  let [ success, setSuccess ] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    login (email,password)
    .then(data=>{
      if(data.error){
        setError(data.error)
      }
      else{
        authenticate(data)
        setSuccess(true)
        toast.success('Welcome')
      } 
    })
  }

  // const notify = () => toast("Wow so easy!");

  let navigate = useNavigate()

  const showError = () => {
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }

  const redirect = () => {
    if(success){
       if(isAuthenticated() &&  isAuthenticated().user.role===0){
        navigate('/')
      }
      else{
        navigate('/admin/dashboard')
        // toast is not working
      }
      // toast.success('welome')
  }}
  
  return (
    <div>
    <Navbar/>
    <ToastContainer position='top-right'></ToastContainer>
    {showError()}
    {redirect()}
      <div className="text-center">
        <div className="w-50 border border-2 m-auto shadow-lg p-3 mt-2">
          <form>
            <img
              className="mb-4"
              src="..\Image\home-page-logo-03.png"
              alt=".."
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="text-center">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={e=>{setEmail(e.target.value)}}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={e=>{setPassword(e.target.value)}}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-50 btn btn-lg btn-primary" 
                onClick={handleLogin}
                  // notify()
                type="submit">
                Login
            </button>
            <br/>
            <Link to='/forgetpassword'>Forgot Password</Link>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login