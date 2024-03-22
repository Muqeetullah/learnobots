import { Button, Input, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { NotesContext } from "../context/notes";
import { useNavigate } from "react-router-dom";

function AddNotes() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const [priority, setPriority] = useState("");

  const { notes, setNotes } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setId(Math.floor(Math.random() * 1000));
    setNotes([...notes, { id, title, description, duedate, priority }]);
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "auto",
      }}
    >
      <h1>Add Note</h1>
      <TextField
        style={{ marginBottom: "10px" }}
        fullWidth
        label="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        style={{ marginBottom: "10px" }}
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <TextField
        style={{ marginBottom: "10px" }}
        fullWidth
        label="Duedate"
        value={duedate}
        onChange={(e) => setDuedate(e.target.value)}
      />

      <TextField
        style={{ marginBottom: "10px" }}
        fullWidth
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleButtonClick()}>
        Add Note
      </Button>
    </div>
  );
}

export default AddNotes;
