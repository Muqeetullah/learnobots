import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../context/notes";

function Home() {
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(NotesContext);
  const handleDelete = (note) => {
    const updated = notes.filter((n) => n.id !== note.id);
    setNotes(updated);
  };

  return (
    <div>
      <h1>Note App</h1>
      <button onClick={() => navigate("/add")}>Add Note</button>

      <div>
        <h2>Notes</h2>
        <ul>
          {notes?.map((note, index) => (
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
                width: "300px",
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <p>{note.duedate}</p>
              <p>{note.priority}</p>
              <button onClick={() => navigate("/edit", { state: note })}>
                Edit Note
              </button>
              <button onClick={() => handleDelete(note)}>Delete Note</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
