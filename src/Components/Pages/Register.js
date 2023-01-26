import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userRgister } from "../../api/userAPi";
import Navbar from "../Layout/Navbar";

const Register = () => {

    let [ username, setUsername ] = useState('')
    let [ email, setEmail ] = useState('')
    let [ password, setPassword ] = useState('')
    let [ error, setError ] = useState('')
    let [ success, setSuccess ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        userRgister(username, email, password)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
                setError('')
            }
        })
    } 
    
    const showError = () => {
            if(error){
                return <div className='alert alert-danger'>{error}</div>
            }
        }

    const showSuccess = () => {
            if(success){
                return <div className='alert alert-sucess'>User Registered Sucessfully. Check email for verification.</div>
            }
        }

  return (
    <div>
    <Navbar/>
    {showError()}
    {showSuccess()}
      <div className="text-center">
        <div className="w-50 border border-2 m-auto shadow-lg p-3 mt-2">
          <form>
            <img
              className="mb-4"
              src=".\Image\home-page-logo-03.png"
              alt=".."
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="text-center">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                  onChange={(e)=>{setUsername(e.target.value)}}
                />
                <label htmlFor="floatingInput">User Name</label>
              </div>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                  onChange={e=>{setEmail(e.target.value)}}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder=""
                  onChange={e=>{setPassword(e.target.value)}}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-50 btn btn-lg btn-primary" 
                onClick={handleSubmit}
                type="submit">
              Submit
            </button>
            <br/>
            <Link to='/forgetpassword'>Forgot Password</Link>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
