import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Game from "./components/Game";
import Login from "./components/Login";
import Punctuation from "./components/Punctuation";
import ResolveGame from "./components/ResolveGame";

function App() {
  let [click, setClick] = useState(""),
    [resultGame, setResultGame] = useState(""),
    [again, setAgain] = useState(false),
    [passOn, setPassOn] = useState("");

  let againA = () => {
    setClick("");
    setResultGame("");

    setAgain(true);
    setTimeout(() => {
      setAgain(false);
    }, 1000);
  };

  return (
    <div>
      <ResolveGame result={resultGame} playAgain={againA} />
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
      <Punctuation result={resultGame} namePlayer={passOn} />
      <Login
        carryOn={(e) => {
          setPassOn(e);
        }}
      />
    </div>
  );
}

export default App;
