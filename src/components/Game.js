import { useRef, useEffect, useState } from "react";
import papel from "../images/img/papel.png";
import piedra from "../images/img/piedra.png";
import tijeras from "../images/img/tijera.png";

export default function Game({ Click, result, playAgainG }) {
  let refImgCpu = useRef();

  let [imgPlayer, setImgPlayer] = useState(null);
  let [imgCPU, setImgCPU] = useState(null);

  useEffect(() => {
    imagePlayer(Click);
    if (Click !== "") {
      animationImageCpu();
    }
  }, [Click]);

  useEffect(() => {
    playAgainG === false ? console.log() : playAgain();
  }, [playAgainG]);

  let randomImage = () => {
    let numbRan = Number.parseInt(Math.random() * 10);
    // console.log(numbRan);

    if (numbRan < 3) {
      return piedra;
    } else if (numbRan > 2 && numbRan < 6) {
      return papel;
    } else {
      return tijeras;
    }
  };

  let animationImageCpu = () => {
    const paint = setInterval(() => {
      let imgCpu = randomImage();
      setImgCPU((imgCPU = imgCpu));
      //pintar el cambio de imagen del cpu con la funcion randomImage()
    }, 1000);
    setTimeout(() => {

      let r = resultOfGame();
      result(r);
      clearInterval(paint);
    }, 4000);
  };

  let imagePlayer = (c) => {
    switch (c) {
      case "TIJERAS":
        setImgPlayer((imgPlayer = tijeras));
        break;
      case "PIEDRA":
        setImgPlayer((imgPlayer = piedra));
        break;
      case "PAPEL":
        setImgPlayer((imgPlayer = papel));
        break;
      default:
        setImgPlayer((imgPlayer = null));
        break;
    }
  };

  let resultOfGame = () => {
    let playCPU = null;
    let playPlayer = Click;

    if (imgCPU === tijeras) {
      playCPU = "TIJERAS"; 
      if (playPlayer === "TIJERAS") {
        return "EMPATE";
      } else if (playPlayer === "PIEDRA") {
        return "GANASTE";
      }
    } else if (imgCPU === piedra) {
      playCPU = "PIEDRA";

      if (playPlayer === "PIEDRA") {
        return "EMPATE";
      } else if (playPlayer === "PAPEL") {
        return "GANASTE";
      }
    } else if (imgCPU === papel) {
      playCPU = "PAPEL";

      if (playPlayer === "PAPEL") {
        return "EMPATE";
      } else if (playPlayer === "TIJERAS") {
        return "GANASTE";
      }
    } 
    return "PERDISTE";
  };

  let playAgain = () => {
    setImgPlayer(null);
    setImgCPU(null);
  }

  return (
    <>
      <div className="game-cpu">
        <h4>CPU</h4>
        <img ref={refImgCpu} src={imgCPU} alt="jugada del cpu" />
      </div>
      <div className="game-player">
        <h4>JUGADOR</h4>
        <img src={imgPlayer} alt="jugada del jugador" />
      </div>
    </>
  );
}
