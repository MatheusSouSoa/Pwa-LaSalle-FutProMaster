export default function CreateTeamInfo() {

    return (
        <div className="flex justify-between px-10 py-1 items-center">
            <div>
                <input 
                    className="outline-none border rounded-xl bg-zinc-100 px-2"
                    type="text" 
                    placeholder="Informe o nome do time" 
                />
            </div>
            <div className="">
                <button className="bg-green-600 text-white px-3 py-1 font-black rounded-md hover:bg-green-500">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}