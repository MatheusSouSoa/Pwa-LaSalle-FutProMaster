import { useState } from "react"

export default function CreateTeamInfo() {

    const [teamName, setTeamName] = useState("")

    return (
        <div className="flex justify-between px-2 md:px-10 py-1 gap-2 items-center">
            <div>
                <input 
                    className="outline-none border w-full rounded-xl bg-zinc-100 px-2"
                    type="text" 
                    value={teamName}
                    onChange={(event) => {
                        setTeamName(event.target.value);
                    }}
                    placeholder="Informe o nome do time" 
                />
            </div>
            <div className="">
                <button className="bg-green-600 text-white px-1 md:px-3 py-1 font-black rounded-md hover:bg-green-500">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}