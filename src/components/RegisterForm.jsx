import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phone: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic Validation
    for (const field in formData) {
      if (!formData[field]) {
        setError("Please fill in all the fields.");
        return;
      }
    }

    // TODO: Replace with API call to register user
    console.log("Registered User:", formData);
    alert("Registration Successful!");
    navigate("/"); // Navigate back to login page
  };

  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <div className="register-page">
      <h1>KARPOM KARPIPOM</h1>
      {error && <p className="error-message">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dob"
          placeholder="Enter date of birth"
          value={formData.dob}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number (e.g. 9876534210)"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
        />
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
