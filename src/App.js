import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Game from "./components/Game";
import ResolveGame from "./components/ResolveGame";

function App() {
  let [click, setClick] = useState(""),
      [resultGame, setResultGame] = useState(""),
      [again, setAgain] = useState(false);

  let againA = () => {
    setClick("");
    setResultGame("");
    setAgain(true);
  }

  return (
    <div>
      <ResolveGame
        result = {resultGame}
        playAgain = {againA}
      />
      <Game
        Click={click}
        result={(e) => {
          setResultGame(e);
        }}
        playAgainG={again}
      />
      <Buttons
        handleClick={(e) => {
          setClick(e);
        }}
        playAgainB={again}
      />
    </div>
  );
}

export default App;
