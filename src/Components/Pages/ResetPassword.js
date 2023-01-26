import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../../api/userAPi";
import Navbar from "../Layout/Navbar";

const ResetPassword = () => {
  let [password, setPassword] = useState("");
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");

  let {token} = useParams()
  
  const handleSubmit = (e) => {
      e.preventDefault();
      resetPassword(password,token)
      // forgetPassword(email)
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccess("");
        } else {
          setSuccess(data.message);
          setError("");
        }
      })
    };

  const showError = () => {
    if (error) {
      return <div className="alert alert-success">{error}</div>;
    }
  };
  const showSuccess = () => {
    if (success) {
      return <div className="alert alert-success">{success}</div>;
    }
  };

  return (
    <div>
      <Navbar />
      {showError()}
      {showSuccess()}
      <div className="form-floating w-50 my-5 p-5 m-auto text-center shadow-lg">
        <div className="form-floating mb-2">
          <input
            type="text"
            id="pwd"
            className="form-control"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="pwd">New Password</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            id="pwd1"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="pwd1">Cofirm Password</label>
        </div>
        <button className="btn btn-warning w-50 mt-3" onClick={handleSubmit}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
