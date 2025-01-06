import React, {useState} from "react";
import "./menuBurguer.css"
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';



function MenuBurguer(){
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu((prevStates) => !prevStates);
    };

    return (
        <div className="app">
            
            <button className="menu-hamburguer" onClick={toggleMenu}>
                {<AppsIcon sx={{ fontSize: 50 }}/>}
            </button>
            

            {/* Menu de opções */}
            <nav className={`menu-opcoes ${openMenu ? 'ativo' : ''}`}>
                <ul>
                    
                    <li><div>{<AddIcon sx={{fontSize:25}}/>}</div>
                    <a href="#opcao1">Adicionar dados</a></li>
                    <li><div>{<DeleteOutlineIcon sx={{fontSize:25}}/>}</div>
                    <a href="#opcao2">Deletar dados</a></li>
                    <li><div>{<ModeEditOutlineIcon sx={{fontSize:25}}/>}</div>
                    <a href="#opcao3">Editar dados</a></li>
                    <li><div>{<PersonAddAltIcon sx={{fontSize:25}}/>}</div>
                    <a href="#opcao4">Adicionar usuário</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuBurguer