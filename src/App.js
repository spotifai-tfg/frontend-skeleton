// src/App.js
import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav style={{ marginBottom: "1rem" }}>
        {/* Enllaços de navegació */}
        <Link to="/" style={{ marginRight: "1rem" }}>
          Inici
        </Link>
        <Link to="/info">
          Informació
        </Link>
      </nav>

      <button onClick={() => navigate("/info")}>
        Més informació
      </button>

      <Routes>
        {/* Ruta per a la pàgina principal */}
        <Route path="/" element={<Home />} />
        {/* Ruta per a la pàgina d'informació */}
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
