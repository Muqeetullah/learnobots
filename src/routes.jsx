// routes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddNotes from "./components/add";
import EditNotes from "./components/edit";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddNotes />} />
      <Route path="/edit" element={<EditNotes />} />
    </Routes>
  );
};

export default AppRoutes;
