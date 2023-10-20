import { SoccerBall, TShirt } from "@phosphor-icons/react";
import {NavLink} from 'react-router-dom'

export default function Sidebar() {


    return (
        <div className="bg-white w-72 h-screen screenCalc  hidden md:block">
            <div>
                <div className="flex flex-col gap-3 p-3">
                    <NavLink to="/" className="bg-green-300 hover:bg-green-400 cursor-pointer flex w-full items-center p-3 rounded-2xl justify-between">
                        <span className="text-white font-black text-xl">Partidas</span>
                        <SoccerBall className="w-10 h-10 text-white"/>
                    </NavLink>
                    <NavLink to='/create-team' className="bg-green-300 hover:bg-green-400 cursor-pointer flex w-full items-center p-3 rounded-2xl justify-between">
                        <span className="text-white font-black text-xl">Times</span>
                        <TShirt className="w-10 h-10 text-white"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}