import { useState } from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 1.4rem;
  padding-bottom: 20px;
`;

const Input = styled.input`
  height: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  align-self: center;
  height: 40px;
  width: 120px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Login = ({ carryOn }) => {
  let [name, setName] = useState("jugador"),
    [dis, setDis] = useState("flex");

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
    setDis(`none`);
  };

  return (
    <>
      <Div style={{ display: `${dis}` }}>
        <P>Ingresa tu alias:</P>
        <Input onChange={saveValue} type="Text" />
        <Button onClick={continueGame}>{textBtn()}</Button>
      </Div>
    </>
  );
};

export default Login;
