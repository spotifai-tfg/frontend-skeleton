import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleGenerate = async () => {
    // Simulem una resposta dummy amb una llista fixa de cançons.
    const dummyPlaylist = [
      "Cançó 1 - Artista Dummy",
      "Cançó 2 - Artista Dummy",
      "Cançó 3 - Artista Dummy",
      "Cançó 4 - Artista Dummy"
    ];
    setPlaylist(dummyPlaylist);
  };

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
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

export default App;
