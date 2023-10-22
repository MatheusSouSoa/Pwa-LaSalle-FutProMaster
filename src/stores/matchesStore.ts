import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Player{
    nome: string
    camisa: number
    situacao: string
    posicao: string
}

interface Time {
    nome: string,
    players: Player[]
}

interface Match {
    minutos: number,
    timeA: Time,
    timeB: Time,
    data: Date
}

interface MatchesStoreProps {
    matche: Match | null
    adicionarTimes: (matches: Match) => (void)
    setarMinuto: (minuto: number) => (void)
}


export const useMatchesStore = create<MatchesStoreProps>()(persist(
    (set) => {
        return {
            matche: null,
            adicionarTimes: (match: Match) => set((store) => produce(store, (draft) => {
                draft.matche=match;
            })),
            setarMinuto: (minuto: number) => set((store) => produce(store, (draft) => {
                if(draft.matche && draft.matche.minutos){
                    draft.matche.minutos = minuto;
                }
            })),
        }
    },{name: 'partida', storage:createJSONStorage(() => localStorage)}))