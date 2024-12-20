import CardDashboard from "../../components/cardDashboard/CardDashboard";
import CardNumbers from "../../components/cardNumbers/CardNumbers";
import GraphDashboard from "../../components/graphDashboard/GraphDashboard";
import GraphDashboardSecond from "../../components/graphDashboard/GraphDashboardSecond";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './dashboard.css'


function Dashboard(){
    const propCards=[{
        title: "BENEFICIÁRIOS ATIVOS",
        value: 122239,
        icon: <TrendingUpIcon/>,
        auxTitle: "CRESCIMENTO",
        color: "#61FB8A",
        buttonColor: "#058B19",
        buttonColorHover:"#0F6F1D"

        },
        {
            title: "BENEFICIÁRIOS SUSPENSOS ",
            value: 0,
            icon: <TrendingDownIcon/>,
            auxTitle: "QUEDA",
            color: "#FBD453",
            buttonColor: "#FF8132",
            buttonColorHover:"#E87229"

        },
        {
            title: "TOTAL",
            value: 100000,
            icon: <Diversity3Icon/>,
            auxTitle: "BENEFICIADOS",
            color: "#3292FF",
            buttonColor: "#8DC2FF",
            buttonColorHover:"#71A0D6"
        }]

    const cardsGraphs=[{
            title: 'SEXO',
            valueGraph: 123,
            color:"#FFFFFF"
        },
        {
            title: 'TIPO DE DOMICÍLIO',
            valueGraph: 123,
            color:"#FFFFFF"
        },
        {
            title: 'NÍVEL DE ESCOLARIDADE',
            valueGraph: 123,
            color:"#FFFFFF"
        },
        {
            title: 'IDENTIDADE RACIAL',
            valueGraph: 123,
            color:"#FFFFFF"
        }]

        

    return(
        <div className="container-dashboard">
            <div className="cards-container-mini">
             {!!cardsGraphs && cardsGraphs.map(card=>{
                return(
                        
                            <CardNumbers
                            title={card.title}
                            valueGraph={card.valueGraph}
                            color={card.color}
                            />
                       
                    )
                })}
            </div>

            <div className="cards-container-graph">
                <div className="container-graphics">
                    <div className="child-container-graphics">
                        <GraphDashboard/>
                    </div>
                </div>
                <div className="container-graphics">
                    <div className="child-container-graphics">
                        <GraphDashboardSecond/>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                {!!propCards && propCards.map(card=>{
                    return (
                    
                            <CardDashboard 
                                title={card.title} 
                                value={card.value} 
                                icon={card.icon}
                                auxTitle={card.auxTitle}
                                color={card.color}
                                buttonColor={card.buttonColor}
                                buttonColorHover={card.buttonColorHover}

                            />     
                        )
                    })}
            </div>
                
        </div>
    )
}

export default Dashboard;