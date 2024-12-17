import "./cardDashboard.css"



function CardDashboard({title, value, icon, auxTitle, color, buttonColor}){
    return(
        <div className="card-dashboard" style={{backgroundColor:color}}>
            <h4>{title}</h4>
            <p>{value}</p>
            
            <p>{icon} <span>{auxTitle}</span></p>
            <div className="container-button">
                <button className="details-card-dashboard" style= {{backgroundColor:buttonColor}}>DETALHES</button>
            </div>
        </div>
    )
}

export default CardDashboard;