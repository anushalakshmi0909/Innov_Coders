import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const StudentPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", rollNo: "123", department: "CSE" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", rollNo: "", department: "" });

  const handleAddStudent = () => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    setNewStudent({ name: "", rollNo: "", department: "" });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Student Profiles
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Name"
          variant="outlined"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          sx={{ mr: 1 }}
        />
        <TextField
          label="Roll No"
          variant="outlined"
          value={newStudent.rollNo}
          onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })}
          sx={{ mr: 1 }}
        />
        <TextField
          label="Department"
          variant="outlined"
          value={newStudent.department}
          onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}
          sx={{ mr: 1 }}
        />
        <Button variant="contained" onClick={handleAddStudent}>
          Add Student
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.rollNo}</TableCell>
                <TableCell>{student.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentPage;
