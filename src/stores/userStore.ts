import { produce } from "immer";
import { create } from "zustand";

interface User{
    uid: string
    name: string
    profilePicture: string
    email: string
} 

interface UserStoreProps {
    user: User | null
    loginUser: (user: User) => void
    logoutUser: () => void
}

export const useUsersStore = create<UserStoreProps>((set) => {
    return {
        user: null,
        loginUser: (user: User) => set((store) => produce(store, (draft) => {
            draft.user = user
        })),
        logoutUser: () => set((store) => produce(store, (draft) => {
            draft.user = null
        }))
    }
})