import "./cardDashboard.css"
import { useState } from "react";


function CardDashboard({title, value, icon, auxTitle, color, buttonColor, buttonColorHover}){
    const [isHovered, setIsHovered] = useState(false);
    const button = isHovered ? buttonColorHover : buttonColor;

    return(
        <div className="card-dashboard" style={{backgroundColor:color}}>
            <h4 className="title-card-dashboard">{title}</h4>
            <p className="value-card-dashboard">{value}</p>
            
            <p>{icon} <span>{auxTitle}</span></p>
            <div className="container-button">
                <button className="details-card-dashboard" 
                style= {{backgroundColor:button}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >DETALHES</button>
            </div>
        </div>
    )
}

export default CardDashboard;