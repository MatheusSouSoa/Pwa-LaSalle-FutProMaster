import { NavLink } from "react-router-dom"

export default function RegisterContent() {

    // const [players, setPlayers] = useState<any[]>()
    
    return (
        <div className="bg-white w-full h-screen screenCalc flex flex-col md:flex-row p-3 text-sm md:text-xl">
            <div className="flex-1 hidden md:block">
                <img src="https://img.freepik.com/vetores-premium/teenage-football-players-from-different-teams-kick-a-soccer-ball-football-competition-cartoon-vector_449384-546.jpg"/>
            </div>
            <div className="flex-1 flex-col gap-3 flex items-center justify-center ">
                <div className="flex-col gap-3 flex items-center justify-center ">
                    <div className="flex flex-col">
                        <span className="font-bold text-3xl">Crie uma conta agora no Pelatola</span>
                    </div>
                    <div className="w-full">
                        <span>Login:</span>
                        <input type="text" placeholder="Email"
                        className="outline-none border-1 bg-zinc-100 px-2 rounded-md w-full border hover:bg-zinc-200 focus:bg-zinc-200 text-zinc-600"
                        />
                    </div>
                    <div className="w-full">
                        <span>Senha:</span>
                        <input type="password" placeholder="insira sua senha aqui"
                        className="outline-none border-1 bg-zinc-100 px-2 rounded-md w-full border hover:bg-zinc-200 focus:bg-zinc-200 text-zinc-600"
                        />
                    </div>
                    <div className="w-full">
                        <span>Repita sua senha:</span>
                        <input type="password" placeholder="Repita sua senha aqui"
                        className="outline-none border-1 bg-zinc-100 px-2 rounded-md w-full border hover:bg-zinc-200 focus:bg-zinc-200 text-zinc-600"
                        />
                    </div>
                    <div className="w-full">
                        <input type="button" value={"Criar conta"} placeholder="insira sua senha aqui"
                        className="outline-none border-1 bg-blue-500 hover:bg-blue-400 px-2 rounded-lg w-full text-white font-black cursor-pointer py-1"
                        />
                    </div>
                    <NavLink to="/" className="">
                        <input type="button" value={"Entrar"}
                        className="outline-none border-1 hover:underline  rounded-lg text-black font-normal cursor-pointer py-1"
                        />
                    </NavLink>
                    <div className="w-full flex justify-center items-center gap-2">
                        <div className="bg-zinc-500 w-full h-1">
                            <hr />
                        </div>
                        <div>
                           <span>ou</span>
                        </div>
                        <div className="w-full bg-zinc-500 h-1">
                            <hr />
                        </div>
                    </div>
                    <div className="w-full flex items-center border bg-zinc-100 text-zinc-400 hover:bg-zinc-400 hover:text-white px-2 rounded-lg cursor-pointer">
                        <input type="button" value={"Login com o google"} placeholder="insira sua senha aqui"
                        className="outline-none border-1  w-full font-black cursor-pointer py-1"
                        />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt=""
                        className="h-7"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}