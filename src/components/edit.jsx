import { Button, Input, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NotesContext } from "../context/notes";

function EditNotes() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const [priority, setPriority] = useState("");

  const { notes, setNotes } = useContext(NotesContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const updated = notes.filter((note) => note.id !== id);
    setNotes([...updated, { id, title, description, duedate, priority }]);
    navigate("/");
  };
  useEffect(() => {
    setId(location.state.id);
    setTitle(location.state.title);
    setDescription(location.state.description);
    setDuedate(location.state.duedate);
    setPriority(location.state.priority);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "auto",
      }}
    >
      <h1>Edit Note</h1>
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
        Edit Note
      </Button>
    </div>
  );
}

export default EditNotes;
