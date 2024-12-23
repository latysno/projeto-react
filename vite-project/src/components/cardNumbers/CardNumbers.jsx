import React, {useEffect, useState} from "react";
import "./cardNumbers.css"

function CardNumbers ({title, subTitleGraph, color, value, colorGraph, progressColor}){

    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        setTimeout(() => setProgress(value),300)
    },[value])
    const styles = {
        container: {
            width: "50%",
            height: "25px",
            backgroundColor: colorGraph,
            borderRadius: "5px",
            overflow: "hidden",
          },
          progress: {
            height: "100%",
            backgroundColor: progressColor,
            transition: "width 0.5s ease", // Transição suave ao mudar de valor
          },
    }

    return(
        <div className="container-card" style={{backgroundColor:color}}>
             <h4 className="title-card-number">{title}</h4>
             <p>{subTitleGraph}</p>
             <div style={styles.container}>
                <div style={{...styles.progress, 
                    width: `${progress}%`
                }}
                    ></div>
             </div>
        </div>
    )
}



export default CardNumbers;