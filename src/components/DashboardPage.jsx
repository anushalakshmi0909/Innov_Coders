import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./DashboardPage.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const students = [
    { id: 1, name: "John Doe", class: "10th Grade" },
    { id: 2, name: "Jane Smith", class: "9th Grade" },
    { id: 3, name: "Alex Johnson", class: "12th Grade" },
    { id: 4, name: "Emma Brown", class: "11th Grade" },
    { id: 5, name: "Liam Williams", class: "10th Grade" },
  ];

  const data = {
    labels: ["Students", "Tutors"],
    datasets: [
      {
        data: [300, 30], // Total students and tutors
        backgroundColor: ["#28a745", "#dc3545"],
        hoverBackgroundColor: ["#218838", "#c82333"],
      },
    ],
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Log out by resetting login state
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>KARPOM KARPIPOM</h2>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li className="active" onClick={() => navigate("/dashboard")}>
            Dashboard
          </li>
          <li onClick={() => navigate("/students")}>Students</li>
          <li onClick={() => navigate("/tutors")}>Tutors</li>
          <li onClick={() => navigate("/test")}>Test</li>
          <li onClick={() => navigate("/attendance")}>Attendance</li>
          <li>Feedback</li>
          <li>Announcements</li>
          <li>Admin Settings</li>
          <li>Help</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <input type="text" placeholder="Search" />
          <div className="admin-info">
            <span>🔔</span>
            <span>Admin</span>
          </div>
          {/* Logout Button */}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* Statistics */}
        <div className="stats">
          <div className="stat-card orange">
            Total Students
            <br />
            <span>300</span>
          </div>
          <div className="stat-card green">
            Total Tutors
            <br />
            <span>30</span>
          </div>
          <div className="stat-card yellow">
            Active Students
            <br />
            <span>200</span>
          </div>
        </div>

        {/* Chart and Student List */}
        <div className="chart-and-list">
          <div className="chart">
            <h3>Student and Tutor Percentage</h3>
            <Doughnut data={data}/>
          </div>
          <div className="student-list">
            <h3>Student List</h3>
            <ul>
              {students.map((student) => (
                <li key={student.id}>
                  {student.name} - {student.class}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
