import { useRef, useState } from "react";

const Buttons = ({ handleClick }) => {
  
  const [play, setPlay] = useState(true);
  
  let click = false;

  let refPiedra = useRef(),
    refPapel = useRef(),
    refTijeras = useRef();

  let clickButton = (text) => {
    switch (text) {
      case "PIEDRA":
        handleClick("PIEDRA");
        break;
      case "PAPEL":
        handleClick("PAPEL");
        break;
      case "TIJERAS":
        handleClick("TIJERAS");
        break;
    }
    setPlay(!play);
    click = true;
  };

  // console.log(refPiedra, refPapel, refTijeras);

  return (
    <>
      <div
        onClick={(e) => {
          play ? clickButton(e.target.innerText) : console.log("botón deshabilitado");
        }}
      >
        <button ref={refPiedra}>PIEDRA</button>
        <button ref={refPapel}>PAPEL</button>
        <button ref={refTijeras}>TIJERAS</button>
      </div>
    </>
  );
};

export default Buttons;
