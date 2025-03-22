import React, { useState } from "react";
import "./Home.css";

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
