import {useState, useEffect} from 'react'

const Punctuation = ({result, namePlayer}) => {

    useEffect(() => {
        points(result);
    }, [result]);

    let [pointPlayer, setPointPlayer] = useState(0),
        [pointCPU, setPointCPU] = useState(0);;

    let points = (r) => {
        switch(r){
            case "GANASTE":
                setPointPlayer(pointPlayer + 1);
                break;
            case "PERDISTE":
                setPointCPU(pointCPU + 1);
                break;
            default:
                break;
        }
    }

    let paintName = () => {
        if(namePlayer === ""){
            return( <h3>Jugador: {pointPlayer}</h3>)
        }else{
            return( <h3>{namePlayer}: {pointPlayer}</h3>)
        }
    }

    return(
        <>
        {paintName()}
        <h3>CPU: {pointCPU}</h3>
        </>
    );
}

export default Punctuation;