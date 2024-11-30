function Login(){
    return(
    <body>
        <h1>LOGIN</h1>
        <form className="forms">

            <div class="input-floating">
                <select className="select-cargo" name="cargo" id="select-cargo">
                    <option value="">CARGO</option>
                    <option value="teste1">JAKSHDKAS</option>
                    <option value="teste2">asdasd</option>
                    <option value="teste3">dfgdfg</option>
                    <option value="teste4">asdasdg</option>
                </select>
            </div>

            <div class="input-floating">
                <input type="email" id="input" placeholder=" " required/>
                <label for="input">Email</label>
            </div>

            <div class="input-floating">
                <input type="password" id="input" placeholder=" " required/>
                <label for="input">Senha</label>
            </div>

        </form>
    </body>
    )
}

export default Login