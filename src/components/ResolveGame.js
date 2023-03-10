import { useState, useEffect } from "react";

const ResolveGame = ({ result, playAgain }) => {
  let [resultGame, setResultGame] = useState("");

  useEffect(() => {
    setResultGame(result);
  }, [result]);

  let paintResult = () => {
    switch (resultGame) {
      case "GANASTE":
        return <h2 style={{ color: "green" }}>{resultGame}</h2>;
      case "EMPATE":
        return <h2 style={{ color: "orange" }}>{resultGame}</h2>;
      case "PERDISTE":
        return <h2 style={{ color: "red" }}>{resultGame}</h2>;
      default:
        return <h2>{resultGame}</h2>;
    }
  };

  return (
    <>
      {paintResult()}
      <button onClick={() => {
        resultGame === "" ? console.log() : playAgain();
      }}>Jugar de nuevo</button>
    </>
  );
};

export default ResolveGame;
