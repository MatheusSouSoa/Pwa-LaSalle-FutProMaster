import { Trash2, User2 } from "lucide-react"

interface SubstituesProps {
    reservas: any[]
}

export default function Substitutes({reservas} : SubstituesProps) {
    return (
        <div className="p-2 bg-green-500 text-white font-semibold border border-white flex gap-6 overflow-x-auto">
                    {reservas ? reservas.map((player, index) => (
                        <div key={index}  className="flex justify-center items-center gap-2 flex-col ">
                            <div className="flex items-center justify-center">
                                <User2 fill="red" color="black" size={32} className="text-blue-500"/>
                                <div title="Excluir jogador">
                                    <Trash2 strokeWidth={3} size={20} className="cursor-pointer"/>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <div>
                                    {player.nome.split(" ").length > 1 ? `${player.nome.split(" ")[0][0]}.${player.nome.split(" ")[1]} ` : player.nome}
                                </div>
                                <div>
                                    {player.camisa}
                                </div>
                            </div>
                        </div>
                    )) : ""}
                </div>
    )
}