import React, { useState } from "react";
import { Add, Edit, Delete } from "@mui/icons-material";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";
import "./TutorsPage.css";

const initialTutors = [
  { id: 1, name: "Prof. Smith", subject: "Math" },
  { id: 2, name: "Prof. Jones", subject: "Science" },
  { id: 3, name: "Prof. Lee", subject: "English" },
];

const TutorsPage = () => {
  const [tutors, setTutors] = useState(initialTutors);
  const [newTutor, setNewTutor] = useState({ name: "", subject: "" });
  const [openDialog, setOpenDialog] = useState(false);
  const [editingTutor, setEditingTutor] = useState(null);

  // Add Tutor
  const handleAddTutor = () => {
    if (!newTutor.name || !newTutor.subject) return alert("Please fill all fields!");
    const id = Date.now();
    setTutors([...tutors, { id, ...newTutor }]);
    setNewTutor({ name: "", subject: "" });
    setOpenDialog(false);
  };

  // Delete Tutor
  const handleDeleteTutor = (id) => {
    setTutors(tutors.filter((tutor) => tutor.id !== id));
  };

  // Edit Tutor
  const handleEditTutor = (tutor) => {
    setEditingTutor(tutor);
    setNewTutor({ name: tutor.name, subject: tutor.subject });
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditingTutor(null);
    setNewTutor({ name: "", subject: "" });
  };

  const handleUpdateTutor = () => {
    const updatedTutors = tutors.map((t) =>
      t.id === editingTutor.id ? { ...t, ...newTutor } : t
    );
    setTutors(updatedTutors);
    setOpenDialog(false);
    setEditingTutor(null);
    setNewTutor({ name: "", subject: "" });
  };

  return (
    <div className="tutors-page">
      <h2>Tutor Management</h2>
      {/* Add New Tutor */}
      <div className="add-tutor-section">
        <input
          type="text"
          placeholder="Tutor Name"
          value={newTutor.name}
          onChange={(e) => setNewTutor({ ...newTutor, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Subject"
          value={newTutor.subject}
          onChange={(e) => setNewTutor({ ...newTutor, subject: e.target.value })}
        />
        <button onClick={() => setOpenDialog(true)} className="icon-button">
          <Add />
        </button>
      </div>
      {/* List Tutors */}
      <div className="tutor-container">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="tutor-card">
            <h3>{tutor.name}</h3>
            <p>Subject: {tutor.subject}</p>
            <div className="tutor-actions">
              <button className="icon-button" onClick={() => handleEditTutor(tutor)}>
                <Edit />
              </button>
              <button className="icon-button" onClick={() => handleDeleteTutor(tutor.id)}>
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog for Adding/Editing Tutor */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{editingTutor ? "Edit Tutor" : "Add New Tutor"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Tutor Name"
            value={newTutor.name}
            onChange={(e) => setNewTutor({ ...newTutor, name: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Subject"
            value={newTutor.subject}
            onChange={(e) => setNewTutor({ ...newTutor, subject: e.target.value })}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={editingTutor ? handleUpdateTutor : handleAddTutor}
            color="primary"
          >
            {editingTutor ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TutorsPage;
