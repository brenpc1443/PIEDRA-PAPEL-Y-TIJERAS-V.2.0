import { useState } from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
  padding: 10px;
`;
const Win = styled.p`
  font-size: 1.6rem;
  color: green;
`;
const Los = styled.p`
  font-size: 1.6rem;
  color: red;
`;

const Infor = styled.div`
  position: fixed;
  top: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 5px;
`;
const I = styled.div`
  font-size: 1rem;
  text-align: center;
`;
const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: red;
`;

const Logout = styled.button`
  width: 100px;
  height: 40px;
  text-align: center;
  margin-top: 10px;
`;

const Info = () => {
  const [active, setActive] = useState(false);

  let moveInfo = (a) => {
    if (a === false) {
      return `left: calc(-65% - 10px);`;
    }
  };

  let Tab = styled.div`
    position: fixed;
    display: flex;
    /* left: calc(-65% - 10px); */
    ${(props) => moveInfo(props.modified)}
    width: 65%;
    height: 65%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 2px solid black;
    margin: 5px;
  `;

  return (
    <>
      <Infor
        onClick={() => {
          setActive(true);
        }}
      >
        <I>i</I>
      </Infor>
      <Tab modified={active}>
        <Close
          onClick={() => {
            setActive(false);
          }}
        >
          X
        </Close>
        <H2>{window.localStorage.getItem("namePlayer")}</H2>
        <Win>Victorias: {window.localStorage.getItem("winsPlayer")}</Win>
        <Los>Derrotas: {window.localStorage.getItem("winsCPU")}</Los>
        <Logout
          onClick={() => {
            window.location.reload();
            window.localStorage.setItem("sesion", "false");
            window.localStorage.setItem("namePlayer", "");
          }}
        >
          CerrarSesión
        </Logout>
      </Tab>
    </>
  );
};

export default Info;
