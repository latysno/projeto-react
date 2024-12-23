import CardDashboard from "../../components/cardDashboard/CardDashboard";
import CardNumbers from "../../components/cardNumbers/CardNumbers";
import GraphDashboard from "../../components/graphDashboard/GraphDashboard";
import GraphDashboardSecond from "../../components/graphDashboard/GraphDashboardSecond";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
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
            subTitleGraph: "teste",
            value: 50,
            color:"#FFFFFF",
            colorGraph:"#d3d3d3",
            progressColor:"#4caf50"
        },
        {
            title: 'TIPO DE DOMICÍLIO',
            subTitleGraph: "teste",
            value: 20,
            color:"#FFFFFF",
            colorGraph:"#d3d3d3",
            progressColor:"#4caf50"

        },
        {
            title: 'NÍVEL DE ESCOLARIDADE',
            subTitleGraph: "teste",
            value: 33,
            color:"#FFFFFF",
            colorGraph:"#d3d3d3",
            progressColor:"#4caf50"

        },
        {
            title: 'IDENTIDADE RACIAL',
            subTitleGraph: "teste",
            value: 40,
            color:"#FFFFFF",
            colorGraph:"#d3d3d3",
            progressColor:"#4caf50"
            
        }]

        

    return(
        
        <div className="container-dashboard">
            <header className="cabecalho-dashboard">
                <div className='container-header-dashboard'>

                    {/* <a className='ancora' href="">Início</a> */}
                    <Link className='ancora' to={"/"}>Início</Link>
                    {/* <a className='ancora' href="#about">Sobre</a> */}
                    <Link className='ancora' to='#about'>Sobre</Link>
                    <Link className='ancora' to="/dashboard">Dashboard</Link>
                     {/* <a className='ancora' href="">Dashboard</a> */}
                    <Link className='ancora' to={"/login"}>Entrar/Cadastrar</Link>
                    {/* <a className='ancora' href="./Login.jsx">Entrar/Cadastrar</a> */}
                </div>
            </header>
            <div className="menu-burguer-icon">
                <AppsIcon sx={{ fontSize: 50 }}/>
            </div>

            <div className="cards-container-mini">
             {!!cardsGraphs && cardsGraphs.map(card=>{
                return(
                        
                            <CardNumbers
                            title={card.title}
                            subTitleGraph={card.subTitleGraph}
                            value={card.value}
                            color={card.color}
                            colorGraph={card.colorGraph}
                            progressColor={card.progressColor}
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