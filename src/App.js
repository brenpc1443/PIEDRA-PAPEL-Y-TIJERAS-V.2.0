import React, { useState } from 'react';
import "./App.css";
import Buttons from "./components/Buttons";
import Game from "./components/Game";
  
function App() {

const [click, setClick] = useState("");


  return (
    <div>
      <Game 
      Click = {click}
      />
      <Buttons
      handleClick = {(e) => {
        setClick(e);
      }}
      />
    </div>
  );
}

export default App;
