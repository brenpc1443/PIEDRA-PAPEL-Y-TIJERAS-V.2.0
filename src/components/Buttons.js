import { useRef, useState, useEffect } from "react";

const Buttons = ({ handleClick, playAgainB }) => {
  let [play, setPlay] = useState(true);

  let refPiedra = useRef(),
    refPapel = useRef(),
    refTijeras = useRef();

  useEffect(() => {
    playAgainB === false ? console.log() : playAgain();
  }, [playAgainB]);

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
      default:
        handleClick("");
        break;
    }
    setPlay(!play);
  };

  let playAgain = () => {
    setPlay(true);
  }
  // console.log(refPiedra, refPapel, refTijeras);

  return (
    <>
      <div
        onClick={(e) => {
          play
            ? clickButton(e.target.innerText)
            : console.log("botón deshabilitado");
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
