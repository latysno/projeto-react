import CardDashboard from "../../components/cardDashboard/CardDashboard";
import CardNumbers from "../../components/cardNumbers/CardNumbers";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Diversity3Icon from '@mui/icons-material/Diversity3';


function Dashboard(){
    const propCards=[{
            title: "TOTAL",
            value: 100000,
            icon: <Diversity3Icon/>,
            auxTitle: "BENEFICIADOS",
            color: "#3292FF",
            buttonColor: "#8DC2FF",
            buttonColorHover:"#71A0D6"
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
            title: "BENEFICIÁRIOS ATIVOS",
            value: 122239,
            icon: <TrendingUpIcon/>,
            auxTitle: "CRESCIMENTO",
            color: "#61FB8A",
            buttonColor: "#058B19",
            buttonColorHover:"#0F6F1D"

        }]
    const cardsGraphs=[{
        title: 'teste',
        valueGraph: 123,
        color:"#FFFFFF"
    }]
    return(
        <div className="container-dashboard">
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
    )
}

export default Dashboard;