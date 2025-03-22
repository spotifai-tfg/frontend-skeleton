import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Info from "./Info/Info";
import "./index.css"; // o "./App.css" si ho has posat allí

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Inici</Link>
        <Link to="/info">Informació</Link>
      </nav>

      {/* Contenidor on es carregaran les "pàgines" */}
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
