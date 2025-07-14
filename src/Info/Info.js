import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="infoContainer">
      <h2>About this project</h2>
      <p>
        This is a final degree project carried out by Carles Sànchez i Hidalgo with the help, mentoring, and tutoring of Ferran Aran Domingo.
      </p>
      <p>
        You can find more information at the following link:
        <br />
        <a
          href="https://github.com/spotifai-tfg/spotifai"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </p>
    </div>
  );
}

export default Info;
