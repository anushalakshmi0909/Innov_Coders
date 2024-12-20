import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Basic Validation
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // TODO: Replace with real authentication logic
    if (username === "anusha" && password === "123") {
      setIsLoggedIn(true); // Set the user logged in
      navigate("/dashboard"); // Navigate to dashboard
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-page">
      <div className="image-section"></div>
      <div className="form-section">
        <h1>KARPOM KARPIPOM</h1>
        <p>Welcome, Please Login to continue</p>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="text"
              placeholder="Username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
