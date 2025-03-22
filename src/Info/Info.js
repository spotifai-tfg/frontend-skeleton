import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="infoContainer">
      <h2>Informació del projecte</h2>
      <p>
        Aquest és un Treball de Final de Grau realitzat per Carles Sànchez Hidalgo amb l'ajuda, mentoria i tutoria de Ferran Aran Domingo.
      </p>
      <p>
        Pots trobar més informació al següent enllaç:
        <br />
        <a
          href="https://github.com/spotifai-tfg/spotifai"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  );
}

export default Info;
