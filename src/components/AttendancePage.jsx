import React from "react";
import "./CommonPages.css";
import "./AttendancePage.css";

const AttendancePage = () => {
  const studentsAttendance = [
    { id: 1, name: "John Doe", present: 20, absent: 5 },
    { id: 2, name: "Jane Smith", present: 18, absent: 7 },
    { id: 3, name: "Alex Johnson", present: 22, absent: 3 },
    { id: 4, name: "Emma Brown", present: 15, absent: 10 },
    { id: 5, name: "Liam Williams", present: 25, absent: 0 },
  ];

  const tutorsAttendance = [
    { id: 1, name: "Dr. Lavanya", present: 20, absent: 3 },
    { id: 2, name: "Prof. Liam", present: 22, absent: 2 },
    { id: 3, name: "Prof. Emma", present: 18, absent: 5 },
    { id: 4, name: "Dr. Raj", present: 24, absent: 1 },
    { id: 5, name: "Prof. Sophia", present: 20, absent: 4 },
  ];

  return (
    <div className="attendance-page">
      <h1>Attendance Overview</h1>

      {/* Section for Students Attendance */}
      <div className="attendance-section">
        <div className="attendance-card">
          <h2>Students Attendance</h2>
          <ul>
            {studentsAttendance.map((student) => (
              <li key={student.id}>
                <span className="name">{student.name}</span>
                <span className="stats">Present: {student.present}</span>
                <span className="stats">Absent: {student.absent}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section for Tutors Attendance */}
      <div className="attendance-section">
        <div className="attendance-card">
          <h2>Tutors Attendance</h2>
          <ul>
            {tutorsAttendance.map((tutor) => (
              <li key={tutor.id}>
                <span className="name">{tutor.name}</span>
                <span className="stats">Present: {tutor.present}</span>
                <span className="stats">Absent: {tutor.absent}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;

