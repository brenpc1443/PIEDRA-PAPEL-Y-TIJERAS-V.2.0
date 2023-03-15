import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Buttons from "./components/Buttons";
import Game from "./components/Game";
import Info from "./components/Info";
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
    [passOn, setPassOn] = useState(window.localStorage.getItem("namePlayer")),
    [disp, setDisp] = useState(`none`),
    [dispG, setDispG] = useState(`block`);

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

  let paintModule = () => {
    if (window.localStorage.getItem("sesion") === "true") {
    } else {
      return <Login carryOn={(e) => setPassOn(e)} />;
    }
  };

  return (
    <div>
      <ResolveGame dis={disp} result={resultGame} playAgain={againA} />
      <PrincipalGame style={{ display: `${dispG}` }}>
        <Info />
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
      {paintModule()}
    </div>
  );
}

export default App;
