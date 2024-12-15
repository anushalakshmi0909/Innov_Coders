import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import DashboardPage from "./components/DashboardPage";
import Students from "./components/Students";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/students" element={<Students/>}/>
      </Routes>
    </Router>
  );
};

export default App;
