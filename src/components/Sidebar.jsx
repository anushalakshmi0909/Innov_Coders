import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>KARPOM KARPIPOM</h2>
      <ul>
        <li>Home</li>
        <li onClick={() => navigate("/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/students")}>Students</li>
        <li onClick={() => navigate("/tutors")}>Tutors</li>
        <li onClick={() => navigate("/attendance")}>Attendance</li>
        <li onClick={() => navigate("/marks")}>Marks</li>
        <li onClick={() =>  navigate("/feedback")}>Feedback</li>
        <li onClick={() =>  navigate("/announcements")}>Announcements</li>
        <li onClick={() =>  navigate("/adminsettings")}>Admin Settings</li>
        <li onClick={() =>  navigate("/help")}>Help</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
