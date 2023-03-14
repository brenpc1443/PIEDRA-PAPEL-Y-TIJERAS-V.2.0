import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Buttons from "./components/Buttons";
import Game from "./components/Game";
import Login from "./components/Login";
import Punctuation from "./components/Punctuation";
import ResolveGame from "./components/ResolveGame";

const PrincipalGame = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
  let [click, setClick] = useState(""),
    [resultGame, setResultGame] = useState(""),
    [again, setAgain] = useState(false),
    [passOn, setPassOn] = useState(""),
    [disp, setDisp] = useState(`none`),
    [dispG, setDispG] = useState(`none`);

  useEffect(() => {
    resultGame === "" ? setDisp(`none`) : setDisp(`flex`);
  }, [resultGame]);

  useEffect(() => {
    passOn === "" ? setDispG(`none`) : setDispG(`block`);
  }, [passOn]);

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
      <ResolveGame dis={disp} result={resultGame} playAgain={againA} />
      <PrincipalGame style={{display: `${dispG}`}}>
        <Punctuation result={resultGame} namePlayer={passOn} />
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
      </PrincipalGame>
      <Login
        carryOn={(e) => {
          setPassOn(e);
        }}
      />
    </div>
  );
}

export default App;
