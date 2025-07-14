// src/Home/Home.js
import React, { useState } from "react";
import axios from "axios";
import "./Home.css";


function Home() {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_URL || "";

  const handleGenerate = async () => {
    if (!query.trim()) {
      return; // no fem res si no hi ha text
    }

    try {
      // Fem un GET a /recommend?q=<consulta>&k=10 (o el nombre que vulguis)
      const response = await axios.get(`${API_BASE_URL}/recommend`, {
        params: { q: query, k: 10 },
      });

      // El backend retorna { query: "...", recommendations: [ {msd_id, mxm_id, title, artist, score}, ... ] }
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error("Error generant la playlist:", error);
    }
  };

  return (
    <div className="homeContainer">
      <h1>SpotifAI - Music recommender</h1>
      <p>Describe the type of music you want to listen to, how you feel or the lyrics you love:</p>
      <input
        type="text"
        placeholder="Write your description here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleGenerate}>Recommend me!</button>

      <div className="playlist">
        <h2>We recommend:</h2>
        {recommendations.length > 0 ? (
          <ul>
            {recommendations.map((song, i) => (
              <li key={i}>
                <strong>{song.title}</strong> — {song.artist}{" "}
                <span className="score">({song.score.toFixed(3)})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No songs to display yet. Please, provide a description to get recommendations.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
