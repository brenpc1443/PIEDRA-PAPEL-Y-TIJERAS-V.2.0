import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Game from "./components/Game";
import ResolveGame from "./components/ResolveGame";

function App() {
  let [click, setClick] = useState(""),
    [resultGame, setResultGame] = useState("");

  return (
    <div>
      <ResolveGame
        result = {resultGame}
      />
      <Game
        Click={click}
        result={(e) => {
          setResultGame(e);
        }}
      />
      <Buttons
        handleClick={(e) => {
          setClick(e);
        }}
      />
    </div>
  );
}

export default App;
