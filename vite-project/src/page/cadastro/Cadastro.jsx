import "./cadastro.css"
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";


function Cadastro (){

        const [inputType, setInputType] = useState("password")
        const visibilityInput =()=>{
            setInputType((value)=> (value === "password" ? "text" : "password"));
        }

    return(
        <div className="container-cadastro">
            <div className="container-form-cadastro">
                <div className="container-form">
                    <h1>REGISTRE-SE</h1>
                    <form className="form" action="submit">
                        <div>
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
                                <input type="text" id="input" placeholder=" " required/>
                                <label for="input">Nacionalidade</label>
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
                        </div>
                        <div>
                            <div className="input-floating">
                                <input type="text" id="input" placeholder=" " required/>
                                <label for="input">Nome Completo</label>
                            </div>
                            <div className="input-floating">
                                <input type="text" id="input" placeholder=" " required/>
                                <label for="input">Telefone</label>
                            </div>
                            
                            <div className="input-floating">
                                <select className="select-cargo" name="cargo" id="select-cargo">    
                                    <option value="">GÊNERO</option>
                                    <option value="teste1">Homem Cis</option>
                                    <option value="teste2">Mulher Cis</option>
                                    <option value="teste3">LBGTQIA+</option>
                                    <option value="teste4">Não-Binário</option>
                                </select>
                            </div>

                            <div className="input-floating">
                                <input type={inputType} id="input" placeholder=" " required/>
                                <label for="input">Cofirmar Senha</label>
                                <button className="iconPassword" type="button" onClick={visibilityInput}>{inputType === "password" ? <VisibilityIcon/> : <VisibilityOffIcon/>}</button>  
                            </div>
                        </div>
                    </form>
                    
                    <button className="button-cadastro">CADASTRAR</button>
                    <p className="possui-conta">Já possui conta ? <Link to={"/login"}>Fazer Login</Link></p>
                </div>
            </div>
            <div className="background-image"></div>
        </div>
    )
}

export default Cadastro