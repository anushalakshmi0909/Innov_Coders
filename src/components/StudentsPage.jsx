import React from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import '../components/Students.css';
import "chart.js/auto"; // Required for chart.js v3+.
import "./Students.css"; // Add the CSS for styling.

const Students = () => {
  const navigate = useNavigate();

  // Sample student data
  const studentList = [
    { id: 1, name: "John Doe", bloodGroup: "A+", score: 85 },
    { id: 2, name: "Jane Smith", bloodGroup: "B-", score: 92 },
    { id: 3, name: "Mark Wilson", bloodGroup: "O+", score: 78 },
    { id: 4, name: "Emily Davis", bloodGroup: "AB+", score: 88 },
  ];

  const handleViewDetails = (studentId) => {
    navigate(`/students/${studentId}`);
  };

  // Chart data for leaderboard
  const chartData = {
    labels: studentList.map((student) => student.name),
    datasets: [
      {
        label: "Leaderboard (Scores)",
        data: studentList.map((student) => student.score),
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"],
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="students-page">
      <h2>Student List</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.bloodGroup}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => handleViewDetails(student.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Leaderboard Chart */}
      <div className="leaderboard">
        <h3>Student Leaderboard</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Students;
