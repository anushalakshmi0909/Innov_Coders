import React from "react";
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

const DashboardPage = () => {
  const students = [
    { id: 1, name: "John Doe", class: "10th Grade" },
    { id: 2, name: "Jane Smith", class: "9th Grade" },
    { id: 3, name: "Alex Johnson", class: "12th Grade" },
    { id: 1, name: "John Doe", class: "10th Grade" },
    { id: 2, name: "Jane Smith", class: "9th Grade" },
    { id: 3, name: "Alex Johnson", class: "12th Grade" },
  ];

  const data = {
    labels: ["Students", "Tutors"],
    datasets: [
      {
        data: [300, 30], // Total students and tutors
        backgroundColor: ["#28a745", "#dc3545"], // Green for students, red for tutors
        hoverBackgroundColor: ["#218838", "#c82333"],
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>KARPOM KARPIPOM</h2>
        <ul>
          <li>Home</li>
          <li className="active">Dashboard</li>
          <li>Students</li>
          <li>Tutors</li>
          <li>Test</li>
          <li>Attendance</li>
          <li>Feedback</li>
          <li>Announcements</li>
          <li>Admin Settings</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="top-bar">
          <input type="text" placeholder="Search" />
          <div className="admin-info">
            <span>🔔</span>
            <span>Admin</span>
          </div>
        </div>
        <div className="stats">
          <div className="stat-card orange">Total Students<br /><span>250</span></div>
          <div className="stat-card green">Total Tutors<br /><span>30</span></div>
          <div className="stat-card yellow">Active Students<br /><span>200</span></div>
        </div>
        <div className="chart-and-list">
          <div className="chart">
            <h3>Student and Tutor Percentage</h3>
            <Doughnut data={data} />
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
