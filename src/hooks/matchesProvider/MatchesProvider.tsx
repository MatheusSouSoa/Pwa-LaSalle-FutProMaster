import { ReactNode, createContext, useContext, useState } from 'react';

const matchesContext = createContext({} as MatchesProps);

interface MatchesProviderProps {
    children: ReactNode
}

interface MatchesProps {
    // data: Date,
    minutos: number,
    timeA: object | null,
    timeB: object | null,
    handleMinutes: (minutes: number) => void
    handleTeamA: (team: object) => void
    handleTeamB: (team: object) => void
}

export default function MatchesProvider({children}: MatchesProviderProps){

    const [minutos, setMinutos] = useState(0)
    const [timeA, setTimeA] = useState<object | null>(null)
    const [timeB, setTimeB] = useState<object | null>(null)

    function handleMinutes(value: number) {
        setMinutos(value)
    }

    function handleTeamA (teamA: object) {
        setTimeA(teamA)
    }

    function handleTeamB (teamB: object) {
        setTimeB(teamB)
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