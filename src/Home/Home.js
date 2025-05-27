// src/Home/Home.js
import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleGenerate = async () => {
    try {
      // Gràcies al proxy, només cal "/recommend"
      const response = await axios.post("/recommend", { query });
      setPlaylist(response.data.playlist);
    } catch (error) {
      console.error("Error generant la playlist:", error);
    }
  };

  return (
    <div className="homeContainer">
      <h1>Spotifai - Recomanador de Música</h1>
      <p>Descriu el tipus de música que vols escoltar:</p>
      <input
        type="text"
        placeholder="Escriu la teva descripció aquí..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleGenerate}>Genera Playlist</button>
      <div className="playlist">
        <h2>La teva Playlist Dummy:</h2>
        {playlist.length > 0 ? (
          <ul>
            {playlist.map((song, i) => (
              <li key={i}>{song}</li>
            ))}
          </ul>
        ) : (
          <p>No hi ha cançons per mostrar encara.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
