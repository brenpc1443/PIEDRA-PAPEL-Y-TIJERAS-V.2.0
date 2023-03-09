import { useRef } from "react";

const Buttons = ({handleClick}) => {

  let refPiedra = useRef(),
    refPapel = useRef(),
    refTijeras = useRef();

  const whoClick = (w) => {
    handleClick(w);
  };

  return (
    <>
      <button ref={refPiedra} onClick={() => {
        whoClick("PIEDRA");
      }}>
        PIEDRA
      </button>
      <button ref={refPapel} onClick={() => {
        whoClick("PAPEL")
      }}>
        PAPEL
      </button>
      <button ref={refTijeras} onClick={() => {
        whoClick("TIJERAS")
      }}>
        TIJERAS
      </button>
    </>
  );
};

export default Buttons;
