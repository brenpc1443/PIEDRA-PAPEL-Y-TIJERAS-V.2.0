import { useEffect, useState } from "react";
import styled from "styled-components";
import papel from "../images/img/papel.png";
import piedra from "../images/img/piedra.png";
import tijeras from "../images/img/tijera.png";
import black from "../images/img/black.png";

const Div = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 20px auto;
  `;
  const DivPlayer = styled(Div)``;
  const DivCPU = styled(Div)``;

  const Img = styled.img`
    height: 90%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 25px;
  `;

  let ImgCpu = styled(Img)`
  `;
  let ImgPlayer = styled(Img)`
  `;

  const H4 = styled.h4`
    height: 30px;
    margin: 0 0 10px 0;
  `;

export default function Game({ Click, result, playAgainG }) {

  let [imgPlayer, setImgPlayer] = useState(black);
  let [imgCPU, setImgCPU] = useState(black);

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
        setImgPlayer((imgPlayer = black));
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
    setImgPlayer(black);
    setImgCPU(black);
  };

  return (
    <>
      <DivCPU>
        <H4>CPU</H4>
        <ImgCpu src={imgCPU} alt="imagen cpu"/>
      </DivCPU>
      <DivPlayer>
        <H4>JUGADOR</H4>
        <ImgPlayer src={imgPlayer} alt="imagen jugador"/>
      </DivPlayer>
    </>
  );
}
