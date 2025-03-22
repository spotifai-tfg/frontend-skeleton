// src/Home.js
import React, { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleGenerate = () => {
    const dummyPlaylist = [
        "Macarrisme Català - Baya Baye MGT Los Sosis",
        "Barretina - Baya Baye MGT Los Sosis",
        "La Mala Espina - Baya Baye MGT Los Sosis",
        "As Bestas - Baya Baye MGT Los Sosis"
      ];
      setPlaylist(dummyPlaylist);
  };

  return (
    <div>
      <h1>Spotifai - Recomanador de Música</h1>
      <p>Descriu el tipus de música que vols escoltar:</p>
      <input
        type="text"
        placeholder="Escriu la teva descripció aquí..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
      />
      <button onClick={handleGenerate} style={{ padding: "0.5rem 1rem" }}>
        Genera Playlist
      </button>
      <div style={{ marginTop: "2rem" }}>
        <h2>La teva Playlist Dummy:</h2>
        {playlist.length > 0 ? (
          <ul>
            {playlist.map((song, index) => (
              <li key={index}>{song}</li>
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
