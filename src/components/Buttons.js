import { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
`;

const Btn = styled.button`
  height: 40px;
  width: 100px;
  background-color: #787878;
  color: white;
  border-radius: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1rem;
`;

const BtnPiedra = styled(Btn)``;

const BtnPapel = styled(Btn)``;

const BtnTijeras = styled(Btn)``;

const Buttons = ({ handleClick, playAgainB }) => {
  useEffect(() => {
    playAgainB === false ? console.log() : playAgain();
  }, [playAgainB]);

  let [play, setPlay] = useState(true);

  let clickButton = (text) => {
    switch (text) {
      case "PIEDRA":
        handleClick("PIEDRA");
        break;
      case "PAPEL":
        handleClick("PAPEL");
        break;
      case "TIJERAS":
        handleClick("TIJERAS");
        break;
      default:
        handleClick("");
        break;
    }
    setPlay(!play);
  };

  let playAgain = () => {
    setPlay(true);
  };
  // console.log(refPiedra, refPapel, refTijeras);

  return (
    <>
      <Div
        onClick={(e) => {
          play
            ? clickButton(e.target.innerText)
            : console.log("botón deshabilitado");
        }}
      >
        <BtnPiedra>PIEDRA</BtnPiedra>
        <BtnPapel>PAPEL</BtnPapel>
        <BtnTijeras>TIJERAS</BtnTijeras>
      </Div>
    </>
  );
};

export default Buttons;
