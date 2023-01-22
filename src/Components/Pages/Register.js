import React from "react";
import Navbar from "../Layout/Navbar";

// { useState }

const Register = () => {
  // let [username, setUsername] = useState('')
  // let [email, setEmail] = useState('')
  // let [password, setpassword] = useState('')
  // let [error, setError] = useState('')
  // let [success, setSucess] =useState('')

  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     userRegister(username, email, password)
  //     .then(data=>{
  //         if(data.error){
  //             setError(data.error)
  //             setSucess(false)
  //         }
  //         else{
  //             setSucess(true)
  //             setError('')
  //         }
  //     })
  // }

  // const showError = () => {
  //     if(error){
  //         return <div classNameName='alert alert-danger'>{error}</div>
  //     }
  // }
  // const showSucess = () => {
  //     if(success){
  //         return <div classNameName='alert alert-sucess'>User Registered Sucessfully. Check email for validation.</div>
  //     }
  // }

  return (
    <div>
    <Navbar/>
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
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-50 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
