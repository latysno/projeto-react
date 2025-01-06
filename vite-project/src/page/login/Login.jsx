import "./login.css"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";


const dados = [
    {mail: 'teste', password: 'teste'},
    {mail: 'teste1', password: 'teste1'}
];


function Login(){
    
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


        const [inputType, setInputType] = useState("password")
        const visibilityInput =()=>{
            setInputType((value)=> (value === "password" ? "text" : "password"));
        }

    return(
    <body>
        <form className="forms">
        
            <div className="loginPage">
                <h1 className="title-login">LOGIN</h1>
                <div className="input-floating">
                    <select className="select-cargo" name="cargo" id="select-cargo">
                        <option value="">CARGO</option>
                        <option value="teste1">Gestor</option>
                        <option value="teste2">Funcionário</option>
                        <option value="teste3">Suporte Técnico</option>
                        <option value="teste4">aaaaa</option>
                    </select>
                </div>

                <div className="input-floating">
                    <input type="email" id="input" placeholder=" " required/>
                    <label for="input">Email</label>
                </div>

                <div className="input-floating">
                    <input type={inputType} id="input" placeholder=" " required/>
                    <label for="input">Senha</label>
                    <button className="iconPassword" type="button" onClick={visibilityInput}>{inputType === "password" ? <VisibilityIcon/> : <VisibilityOffIcon/>}</button>  
                </div>

                <a className="esqueceu-senha" href="">ESQUECEU SUA SENHA ?</a>
                <button className="button-login">LOGIN</button>
                <p className="cadastrar">Não possui conta ? <Link to={"/cadastrar"}>Cadastre-se</Link></p>
            </div>
           
            <div className="img_login"></div>
                    {/* <img src="./src/assets/image/imagem_login.jpg" alt="" srcset="" /> */}

        </form>
            
    </body>
    )
}

export default Login