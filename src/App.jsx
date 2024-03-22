import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { NotesProvider } from "./context/notes";

function App() {
  return (
    <Router>
      <NotesProvider>
        <AppRoutes />
      </NotesProvider>
    </Router>
  );
}

export default App;
