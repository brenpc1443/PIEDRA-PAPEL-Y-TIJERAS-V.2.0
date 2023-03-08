import React from "react";
import papel from "../images/img/papel.png";
import piedra from "../images/img/piedra.png";
import tijeras from "../images/img/tijera.png";

export default function Game() {
  let randomImage = () => {
    let numbRan = Number.parseInt(Math.random() * 10);
    console.log(numbRan);

    if (numbRan < 3) {
      return piedra;
    } else if (numbRan > 2 && numbRan < 6) {
      return papel;
    } else {
      return tijeras;
    }
  };

  return (
    <>
      <div className="game-cpu">
        <h4>CPU</h4>
        <img src={null} alt="jugada del cpu" />
      </div>
      <div className="game-player">
        <h4>JUGADOR</h4>
        <img src={null} alt="jugada del jugador" />
      </div>
    </>
  );
}
