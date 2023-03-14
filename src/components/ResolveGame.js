import { useState, useEffect } from "react";
import styled from "styled-components";

const ResultGame = styled.h2`
  text-align: center;
  margin: 0 0 70px 0;
  font-size: 4rem;
`;
let Div = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: RGB(102, 102, 102, 0.6);
`;

const Btn = styled.button`
    height: 50px;
    width: 150px;
    font-size: 1.1rem;
  `;

const ResolveGame = ({ result, playAgain, dis }) => {
  let [resultGame, setResultGame] = useState("");

  useEffect(() => {
    setResultGame(result);
  }, [result]);

  let paintResult = () => {
    switch (resultGame) {
      case "GANASTE":
        return <ResultGame style={{ color: "green" }}>{resultGame}</ResultGame>;
      case "EMPATE":
        return (
          <ResultGame style={{ color: "orange" }}>{resultGame}</ResultGame>
        );
      case "PERDISTE":
        return <ResultGame style={{ color: "red" }}>{resultGame}</ResultGame>;
      default:
        return <ResultGame>{resultGame}</ResultGame>;
    }
  };

  return (
    <>
      <Div style={{display: `${dis}`}}>
        {paintResult()}
        <Btn
          onClick={() => {
            resultGame === "" ? console.log() : playAgain();
          }}
        >
          Jugar de nuevo
        </Btn>
      </Div>
    </>
  );
};

export default ResolveGame;
