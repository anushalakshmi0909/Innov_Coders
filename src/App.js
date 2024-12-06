import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import DashboardPage from "./components/DashboardPage";  // Import DashboardPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />  {/* Route for LoginPage */}
        <Route path="/register" element={<RegisterForm />} />  {/* Route for RegisterForm */}
        <Route path="/dashboard" element={<DashboardPage />} />  {/* Route for DashboardPage */}
      </Routes>
    </Router>
  );
};

export default App;
