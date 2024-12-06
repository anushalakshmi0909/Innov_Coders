//LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform validation here, and if valid, navigate to the dashboard
    navigate("/dashboard");  // This will need to be set up separately.
  };

  const handleRegisterClick = () => {
    navigate("/register");  // Navigate to the register page
  };

  return (
    <div className="login-page">
      <div className="image-section"></div>
      <div className="form-section">
        <h1>KARPOM KARPIPOM</h1>
        <p>Welcome, Please Login to continue</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input type="text" placeholder="Username or email" />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span className="register-link" onClick={handleRegisterClick}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
//RegisterForm.css