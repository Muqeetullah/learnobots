import React, { createContext, useState } from "react";

// Create the context
export const NotesContext = createContext();

// Create the context provider
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
