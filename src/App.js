import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import Info from "./Info/Info";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav>
        <Link to="/" className="navLink">Inici</Link>
        <Link to="/info" className="navLink">Informació</Link>
      </nav>
      <button onClick={() => navigate("/info")}>Més informació</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
