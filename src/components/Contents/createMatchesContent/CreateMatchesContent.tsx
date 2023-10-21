import { useNavigate } from "react-router-dom";
import Cronometro from "../../cronometro/Cronometro";
import { format } from "date-fns";
import { useState } from "react";
import { useMatches } from "../../../hooks/matchesProvider/MatchesProvider";

interface PartidaProps {
    data: Date,
    minutos: number,
    timeA: {
        nome: string,
        placar: number
    },
    timeB: {
        nome: string,
        placar: number
    }
}

export default function CreateMatchesContent() {


    const navigate = useNavigate();
    const [homeGoal, setHomeGoal] = useState(0)
    const [awayGoal, setAwayGoal] = useState(0)
    const {handleMinutes, minutos} = useMatches()
    handleMinutes(8)


    const redirecionarParaOutraPagina = () => {
        navigate('/matches');
    }
    
    function handleHomeGoal(reset: boolean, value: number) {
        if(homeGoal + value < 0) return
        if(reset) {
            setHomeGoal(0)
            return
        }
        setHomeGoal(homeGoal + value)
    }

    function handleAwayGoal(reset: boolean, value: number) {
        if(awayGoal + value < 0) return
        if(reset) {
            setAwayGoal(0)
            return
        }
        setAwayGoal(awayGoal + value)
    }

    const times = [
        {
          nome: "Flamengo",
          placar: 3,
          jogadores: []
        },
        {
          nome: "Corinthians",
          placar: 0,
          jogadores: []
        },
        {
          nome: "São Paulo",
          placar: 1,
          jogadores: []
        },
        // Você pode adicionar mais times aqui
    ];

    const partida: PartidaProps = {
        data: new Date(Date.now()),
        minutos: 0,
        timeA: {
            nome: "Flamengo",
            placar: 0
        },
        timeB: {
            nome: "Palmeiras",
            placar: 0
        }
    }
      

    return (
        <div className="bg-zinc-200 w-full h-screen screenCalc flex p-3 text-sm md:text-xl">
            <div className="flex flex-col w-full rounded-lg overflow-hidden ">
                <div className="bg-green-500 flex justify-between items-center p-5 border border-b-black">
                    <div className="font-semibold text-white">
                        Criar partida
                    </div>
                    <div>
                        <select 
                            className="outline-none border rounded-md"
                            name="" 
                            id=""
                        >
                            {times.map((time, index) => (
                                <option key={index} value={time.nome}>{time.nome}</option>
                            ))}
                        </select>
                        X
                        <select 
                            className="outline-none border rounded-md"
                            name="" 
                            id=""
                        >
                            {times.map((time, index) => (
                                <option key={index} value={time.nome}>{time.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex">
                        <span className="pr-2">Minutos:</span>
                        <input 
                            type="number" 
                            placeholder="minutos a serem jogados" 
                            required
                            className="outline-none border-1 bg-zinc-100 px-2 rounded-md w-12 border hover:bg-zinc-200 focus:bg-zinc-200 text-zinc-600"
                            value={minutos}
                            onChange={(event) => handleMinutes(parseInt(event.target.value))}
                        />
                    </div>

                </div>
                <div className="bg-white h-full p-2 flex flex-col gap-5 justify-center items-center w-full overflow-y-auto">
                    <Cronometro redirecionar={redirecionarParaOutraPagina} handleAwayGoal={handleAwayGoal} handleHomeGoal={handleHomeGoal}/>
                    <div className="w-full h-full">
                        {
                            <div className="bg-white border rounded-lg  flex flex-col justify-between items-center h-full">
                                <div className="border-b w-full flex justify-between items-center bg-green-400 text-white">
                                    <div className="flex gap-3 px-2">
                                        <span>
                                            Data:
                                        </span>
                                        <span>
                                            {format(partida.data, "dd/MM/yyyy")}
                                        </span>
                                    </div>
                                    <div className="flex gap-3 px-2">
                                        <span>Duração da partida:</span>
                                        <span>{minutos}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full flex-1 ">
                                    <div className="w-full flex flex-col justify-between items-center p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl ">
                                        <div className=" flex-1">
                                            {partida.timeA.nome}
                                        </div>
                                        <div className="text-7xl ">
                                            {homeGoal}
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col justify-between items-center p-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl ">
                                        X
                                    </div>
                                    <div className="w-full flex flex-col justify-between items-center p-2 text-xl sm:text-2xl md:text-5xl ">
                                        <div className=" flex-1">
                                            {partida.timeB.nome}
                                        </div>
                                        <div className="text-7xl  h-full">
                                            {awayGoal}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}