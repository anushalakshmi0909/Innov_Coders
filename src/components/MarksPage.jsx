import React, { useState } from "react";
import "./MarksPage.css";

const MarksPage = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Sample Data for Marks
  const students = [
    {
      id: 1,
      name: "John Doe",
      marks: {
        Math: 85,
        Science: 78,
        English: 92,
        History: 88,
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      marks: {
        Math: 72,
        Science: 88,
        English: 91,
        History: 81,
      },
    },
    {
      id: 3,
      name: "Alex Johnson",
      marks: {
        Math: 95,
        Science: 87,
        English: 85,
        History: 80,
      },
    },
    {
      id: 4,
      name: "Emma Brown",
      marks: {
        Math: 89,
        Science: 77,
        English: 83,
        History: 82,
      },
    },
    {
      id: 5,
      name: "Liam Williams",
      marks: {
        Math: 78,
        Science: 83,
        English: 88,
        History: 94,
      },
    },
  ];

  // Handle view for cumulative report
  const handleViewReport = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseReport = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="marks-page">
      <h1>Student Marks and Cumulative Report</h1>
      <div className="student-section">
        <h2>Student List</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name}
              <button
                className="view-button"
                onClick={() => handleViewReport(student)}
              >
                View Report
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedStudent && (
        <div className="report-modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseReport}>
              &times;
            </span>
            <h3>Cumulative Report: {selectedStudent.name}</h3>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedStudent.marks).map(([subject, marks]) => (
                  <tr key={subject}>
                    <td>{subject}</td>
                    <td>{marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Added Cancel Button */}
            <button className="cancel-button" onClick={handleCloseReport}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarksPage;
