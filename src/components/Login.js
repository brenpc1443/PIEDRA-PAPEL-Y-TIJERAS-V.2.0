import { useState } from "react";

const Login = ({carryOn}) => {
  let [name, setName] = useState("");

  let textBtn = () => {
    if (name === "") {
      return "Saltar";
    } else {
      return "Jugar";
    }
  };

  let saveValue = (v) => {
    setName(v.target.value);
  };

  let continueGame = (e) => {
    carryOn(name);
    //se elimina este componente de la vista del jugador, se le pone un display:none xd
  }

  return (
    <>
      <p>Ingresa tu alias:</p>
      <input onChange={saveValue} type="Text"  />
      <button onClick={continueGame}>{textBtn()}</button>
    </>
  );
};

export default Login;
