

  //RegisterForm.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/");  // Navigate back to the login page
  };

  return (
    <div className="register-page">
      <h1>KARPOM KARPIPOM</h1>
      <form className="register-form">
        <input type="text" placeholder="Enter first name" />
        <input type="text" placeholder="Enter last name" />
        <input type="email" placeholder="Enter email" />
        <input type="date" placeholder="Enter date of birth" />
        <input type="text" placeholder="Enter phone number (e.g. 9876534210)" />
        <input type="text" placeholder="Enter username" />
        <input type="password" placeholder="Enter password" />
        <button type="submit" className="register-button">
          REGISTER
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="login-link" onClick={handleBackToLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
