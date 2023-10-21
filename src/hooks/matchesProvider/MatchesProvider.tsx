import { ReactNode, createContext, useContext, useState } from 'react';

const matchesContext = createContext({} as MatchesProps);

interface MatchesProviderProps {
    children: ReactNode
}

interface Time {
    nome: string;
    jogadores: unknown[];
}

interface MatchesProps {
    minutos: number;
    timeA: Time | null;
    timeB: Time | null;
    handleMinutes: (minutes: number) => void;
    handleTeamA: (time: Time | null) => void;
    handleTeamB: (time: Time | null) => void;
}

export default function MatchesProvider({children}: MatchesProviderProps){

    const [minutos, setMinutos] = useState(0)
    const [timeA, setTimeA] = useState<Time | null>(null)
    const [timeB, setTimeB] = useState<Time | null>(null)

    function handleMinutes(value: number) {
        setMinutos(value)
    }

    function handleTeamA (time: Time | null) {
        setTimeA(time)
    }

    function handleTeamB (time:Time | null) {
        setTimeB(time)
    }


    return(
        <matchesContext.Provider value={{minutos, handleMinutes, timeA, timeB, handleTeamA, handleTeamB}}>
            {children}
        </matchesContext.Provider>
    )
}

export function useMatches() {
    return useContext(matchesContext)
}