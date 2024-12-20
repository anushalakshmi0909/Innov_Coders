import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Students.css";

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const studentData = {
    1: { name: "John Doe", age: 20, bloodGroup: "A+", department: "Computer Science" },
    2: { name: "Jane Smith", age: 21, bloodGroup: "B-", department: "Electronics" },
    3: { name: "Mark Wilson", age: 22, bloodGroup: "O+", department: "Mechanical" },
    4: { name: "Emily Davis", age: 19, bloodGroup: "AB+", department: "Civil" },
  };

  const student = studentData[id];

  const handleBack = () => {
    navigate("/students");
  };

  return (
    <div className="students-page">
      <h2>Student Details</h2>
      {student ? (
        <div className="leaderboard">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Blood Group:</strong> {student.bloodGroup}</p>
          <p><strong>Department:</strong> {student.department}</p>
          <button className="view-button" onClick={handleBack}>
            Back to Students
          </button>
        </div>
      ) : (
        <p>Student not found!</p>
      )}
    </div>
  );
};

export default StudentDetails;
