import React, { useState } from "react";
import { forgetPassword } from "../../api/userAPi";
import Navbar from "../Layout/Navbar";

const ForgetPassword = () => {
  let [email, setEmail] = useState("");
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    forgetPassword(email)
    .then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccess("");
      } else {
        setSuccess(data.message);
        setError("");
      }
    });
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
      <div className="text-center">
        <div className="form-floating ">
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>

        <button className="btn btn-warning w-50 mt-3" onClick={handleSubmit}>
          Forget Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
