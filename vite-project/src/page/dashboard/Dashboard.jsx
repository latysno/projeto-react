import CardDashboard from "../../components/cardDashboard/CardDashboard";
import InstagramIcon from '@mui/icons-material/Instagram';


function Dashboard(){
    const propCards=[{
            title: "TOTAL",
            value: 100000,
            icon: <InstagramIcon/>,
            auxTitle: "BENEFICIADOS",
            color: "#3292FF",
            buttonColor: "#8DC2FF"
        },
        {
            title: "BENEFICIÁRIOS SUSPENSOS ",
            value: 0,
            icon: <InstagramIcon/>,
            auxTitle: "QUEDA",
            color: "#FBD453",
            buttonColor: "#FF8132"
        },
        {
            title: "BENEFICIÁRIOS ATIVOS",
            value: 122239,
            icon: <InstagramIcon/>,
            auxTitle: "CRESCIMENTO",
            color: "#61FB8A",
            buttonColor: "#058B19"
        }]
    return(
        <>
            {!!propCards && propCards.map(card=>{
                return (
                    <CardDashboard 
                        title={card.title} 
                        value={card.value} 
                        icon={card.icon}
                        auxTitle={card.auxTitle}
                        color={card.color}
                        buttonColor={card.buttonColor}
                    />
                )
            })}
        </>
    )
}

export default Dashboard;