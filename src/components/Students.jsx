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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
} from "@mui/material";

const StudentPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", rollNo: "123", department: "CSE", image: "" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", rollNo: "", department: "", image: "" });
  const [editingStudent, setEditingStudent] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleAddStudent = () => {
    if (editingStudent) {
      setStudents(
        students.map((student) =>
          student.id === editingStudent.id ? { ...editingStudent } : student
        )
      );
      setEditingStudent(null);
    } else {
      setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    }
    setNewStudent({ name: "", rollNo: "", department: "", image: "" });
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setNewStudent(student);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseDialog = () => {
    setSelectedStudent(null);
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
        <TextField
          label="Image URL"
          variant="outlined"
          value={newStudent.image}
          onChange={(e) => setNewStudent({ ...newStudent, image: e.target.value })}
          sx={{ mr: 1 }}
        />
        <Button variant="contained" onClick={handleAddStudent}>
          {editingStudent ? "Update Student" : "Add Student"}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.rollNo}</TableCell>
                <TableCell>{student.department}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewStudent(student)}
                    sx={{ mr: 1 }}
                  >
                    View
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditStudent(student)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* View Student Dialog */}
      {selectedStudent && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>Student Details</DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar
                src={selectedStudent.image}
                alt={selectedStudent.name}
                sx={{ width: 100, height: 100, mr: 2 }}
              />
              <Typography variant="h6">{selectedStudent.name}</Typography>
            </Box>
            <Typography>
              <strong>Roll No:</strong> {selectedStudent.rollNo}
            </Typography>
            <Typography>
              <strong>Department:</strong> {selectedStudent.department}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default StudentPage;
