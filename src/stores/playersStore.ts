import { produce } from "immer";
import { create } from "zustand";

interface Player{
    nome: string
    camisa: number
    situacao: string
    posicao: string
}

interface PlayersStoreProps {
    players: Player[]
    addPlayer: (player: Player) => void 
    removePlayer: (camisa: number) => void 
    resetPlayers: () => void
}

export const usePlayersStore = create<PlayersStoreProps>((set) => {
    return {
        players: [],
        addPlayer: (player: Player) => set((store) => produce(store, (draft) => {
            draft.players.push(player)
        })),
        removePlayer: (camisa: number) => set((store) => produce(store, (draft) => {
            draft.players = store.players.filter((player) => player.camisa !== camisa)
        })),
        resetPlayers: () => set((store) => produce(store, (draft) =>{
            draft.players = []
        }))
    }
})