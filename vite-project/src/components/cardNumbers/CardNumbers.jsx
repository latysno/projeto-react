import "./cardNumbers.css"

function CardNumbers ({title, valueGraph, color}){

    return(
        <div className="container-card" style={{backgroundColor:color}}>
             <h4 className="title-card-number">{title}</h4>
             <p>{valueGraph}</p>
        </div>
    )
}

export default CardNumbers;