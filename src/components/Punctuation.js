import { useState, useEffect } from "react";
import styled from "styled-components";

const H3 = styled.h3`
  display: flex;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  padding: 5px;
  border: 2px solid black;
`;

const PointPlayer = styled(H3)``;

const PointCPU = styled(H3)``;

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-around;
  align-items: center;
`;

const Punctuation = ({ result, namePlayer }) => {
  useEffect(() => {
    points(result);
  }, [result]);

  let [pointPlayer, setPointPlayer] = useState(0),
    [pointCPU, setPointCPU] = useState(0);

  let points = (r) => {
    switch (r) {
      case "GANASTE":
        setPointPlayer(pointPlayer + 1);
        break;
      case "PERDISTE":
        setPointCPU(pointCPU + 1);
        break;
      default:
        break;
    }
  };

  let paintName = () => {
    if (namePlayer === "") {
      return <PointPlayer>Jugador: {pointPlayer}</PointPlayer>;
    } else {
      return (
        <PointPlayer>
          {namePlayer}: {pointPlayer}
        </PointPlayer>
      );
    }
  };

  return (
    <>
      <Div>
        {paintName()}
        <PointCPU>CPU: {pointCPU}</PointCPU>
      </Div>
    </>
  );
};

export default Punctuation;
