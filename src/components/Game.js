import { useRef, useEffect, useState } from "react";
import papel from "../images/img/papel.png";
import piedra from "../images/img/piedra.png";
import tijeras from "../images/img/tijera.png";

export default function Game({Click}) {
  let refImgCpu = useRef();
  let [imgCPU, setImgCPU] = useState(null);

  useEffect(() => {
    imagePlayer(Click);
  }, [Click]);

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

  let animationImageCpu = () => {
    const paint = setInterval(() => {
      let imgCpu = randomImage();
      //pintar el cambio de imagen del cpu con la funcion randomImage()
    }, 2000);
    setTimeout(() => {
      clearInterval(paint);
    }, 8000);
  };

  let imagePlayer = (c) => {
    switch (c) {
      case "TIJERAS":
        setImgCPU(imgCPU = tijeras);
        break;
      case "PIEDRA":
        setImgCPU(imgCPU = piedra);
        break;
      case "PAPEL":
        setImgCPU(imgCPU = papel);
        break;
      default:
        setImgCPU(imgCPU = null);
        break;
    }
  };

  return (
    <>
      <div className="game-cpu">
        <h4>CPU</h4>
        <img ref={refImgCpu} src={imgCPU} alt="jugada del cpu" />
      </div>
      <div className="game-player">
        <h4>JUGADOR</h4>
        <img src={null} alt="jugada del jugador" />
      </div>
    </>
  );
}
