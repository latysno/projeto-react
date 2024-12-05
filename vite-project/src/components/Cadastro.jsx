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
        <body>
            <div className="container-register">
                <div className="container-child">
                    <form className="forms-pai" action="">
                        <div className="registrePage">
                            <h1>REGISTRE-SE</h1>
                            <div className="forms-1">
                                <div className="input-floating">
                                    <select className="select-cargo" name="cargo" id="select-cargo">
                                        <option value="">CARGO</option>
                                        <option value="teste1">JAKSHDKAS</option>
                                        <option value="teste2">asdasd</option>
                                        <option value="teste3">dfgdfg</option>
                                        <option value="teste4">asdasdg</option>
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
                            <div className="forms-2">
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
                        </div>
                        <div className="enviar-cadastro">
                            <button className="button-cadastro">CADASTRAR</button>
                            <p>JÁ POSSUI CONTA <Link>FAZER LOGIN</Link></p>
                        </div>
                    
                    </form>
                </div>
                <div className="img_cadastro">
                    <img src="./src/assets/image/imagem_login.jpg" alt="" srcset="" />
                </div>
            </div>
        </body>
    )
}

export default Cadastro